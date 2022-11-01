let producto = parseInt(prompt("Elegi el producto que deseas comprar: 1.Cereales - 2.Legumbres - 3.Frutas"))
let totalCompra = 0
let seguirComprando = true
let decision

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}
const Cereales = new Producto(1, "Cereales", 1200)
const Legumbres = new Producto(2, "Legumbres", 875)
const Frutas = new Producto(3, "Frutas", 350)

while (seguirComprando === true) {
    if (producto === 1) {totalCompra = totalCompra + Cereales.precio
    } else if (producto === 2) {totalCompra = totalCompra + Legumbres.precio
    } else if (producto === 3) {totalCompra = totalCompra + Frutas.precio
    } else {producto = parseInt(prompt("Pronto tendremos mas stock, pero por ahora, solo contamos con estos productos para ofrecerte: 1.Cereales - 2.Legumbres - 3.Frutas"))
    continue}}

decision = parseInt(prompt("Queres sumar algo mas al carrito? 1.Si - 2.No"))
    if (decision === 1) {producto = parseInt(prompt('Selecciona el producto que deseas comprar: 1.Cereales - 2.Legumbres - 3.Frutas'))
    } else {seguirComprando = false}
alert(`El total de tu compra es ${totalCompra}`)