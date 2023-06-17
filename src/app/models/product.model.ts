
export interface ProductImg {
    nombre: string,
    id_producto_imagen: number,
    orden: number,
    url?: string,
}

export interface Product {
    destacado: number,
    nombre: string,
    id_producto: number,
    id_subcategoria: number,
    precio: number,
    imagenes: ProductImg[],
    vendible: number,
    stock: number,
    garantia: number,
    iva: number,
}