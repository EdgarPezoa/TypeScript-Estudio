import { PedidosDetalles } from './PedidosDetalles';
import { Productos } from './Productos';

export class Pedidos {
    id:number;
    clienteId:number;
    nombreCliente:string;
    total:number;
    pedidosDetalles: Array<PedidosDetalles>;

    constructor() {
        this.pedidosDetalles = new Array<PedidosDetalles>();
    }

    agregarProducto(producto: Productos){
        let pedidoDetalle: PedidosDetalles = new PedidosDetalles();
        pedidoDetalle.cantidad = 1;
        pedidoDetalle.nombreProducto = producto.nombre;
        pedidoDetalle.precio = producto.precio;
        pedidoDetalle.productoId = producto.id;
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;

        let pedidoArray = this.pedidosDetalles.filter( (pedidoDetalleArray)=>{
            return pedidoDetalleArray.productoId == producto.id;
        });
        console.log(pedidoArray);
        
        if(pedidoArray){
            
        }
        
        this.pedidosDetalles.push(pedidoDetalle);
    }

}