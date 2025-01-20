// Función para agregar un nuevo producto
function addProduct() {
    // Obtener valores de los inputs
    const productName = document.querySelector('.product-input').value;
    const productPrice = document.querySelector('.price-input').value;
    const imageFile = document.querySelector('.image-input').files[0];

    // Validar los campos
    if (!productName || !productPrice || !imageFile) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear contenedor del nuevo producto
    const newProductDiv = document.createElement('div');
    newProductDiv.classList.add('new-product'); // Clase para los productos nuevos

    // Crear div para la imagen
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('new-product-image'); // Clase para la imagen
    const imageUrl = URL.createObjectURL(imageFile); // Convertir archivo a URL
    imageDiv.style.backgroundImage = `url(${imageUrl})`;

    // Crear spans para el nombre y precio
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('new-product-name');
    nameSpan.textContent = productName;

    const priceSpan = document.createElement('span');
    priceSpan.classList.add('new-product-price');
    priceSpan.textContent = `$ ${productPrice}`;

    // Crear botón (tachito)
    const button = document.createElement('button');
    button.classList.add('new-product-button');
    button.textContent = ''; // Dejamos vacío para solo mostrar el ícono del tacho

    // Agregar la función de eliminación al botón
    button.addEventListener('click', () => {
        // Eliminar el producto cuando el botón de tacho es presionado
        newProductDiv.remove();
    });

    // Agregar elementos al contenedor del nuevo producto
    newProductDiv.appendChild(imageDiv);
    newProductDiv.appendChild(nameSpan);
    newProductDiv.appendChild(priceSpan);
    newProductDiv.appendChild(button);

    // Obtener contenedor principal
    const productList = document.getElementById('product-list');

    // Obtener todas las filas existentes
    const rows = productList.querySelectorAll('.product-row');

    // Si no hay filas o la última fila tiene 3 productos, crear una nueva fila
    if (rows.length === 0 || rows[rows.length - 1].children.length >= 3) {
        // Crear una nueva fila de productos
        const newRow = document.createElement('div');
        newRow.classList.add('product-row'); // Clase para la nueva fila
        productList.appendChild(newRow);
    }

    // Obtener la última fila
    const lastRow = productList.querySelector('.product-row:last-of-type');

    // Agregar el nuevo producto a la última fila
    lastRow.appendChild(newProductDiv);

    // Ajustar el scroll para mostrar el producto recién agregado
    productList.scrollTop = productList.scrollHeight;

    // Limpiar campos
    clearFields();
}

// Limpiar campos
function clearFields() {
    document.querySelector('.product-input').value = '';
    document.querySelector('.price-input').value = '';
    document.querySelector('.image-input').value = '';
}
