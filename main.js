class ProductData {
	constructor(id) {
		this.acquireAndSetDataValues(id);
	}
	acquireAndSetDataValues(id) {	
		/* Code for acquiring the data goes here */
		this.nombre = "Producto " + id;
		this.precioCompra = 0;
		this.precioVenta = 0;
		this.gastos = 0;
		this.marca = "";
		this.consignacion = "";
		this.notas = "";
	}
	getDescription() {
		let productDescription = "Informacion del producto \"" + this.nombre + "\" iria aca.";
		/* Code for formatting the product's infromation goes here */
		return productDescription;
	}
}


function getProductData() {
	let id = document.getElementById("idTextBox").value;
	return new ProductData(id);
}
function writeProductInformation() {
	productData = getProductData();
	document.getElementById("infoProducto").innerText = productData.getDescription();
}

function start() {

	document.getElementById("mainButton").addEventListener("click", function() {
		writeProductInformation();
	}, false);
}

start()
