let obj = [
    {id: "1", name: "Producto 1", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
    {id: "2", name: "Producto 2", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
    {id: "3", name: "Producto 3", categoria: "Pota", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
    {id: "4", name: "Producto 4", categoria: "Pota", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
]

// export const gFetch = new Promise( (resuelto, rechazado) => {
//     resuelto(obj)
// })

// let obj = [
//     {id: '1', name: 'PRODUCTO 1', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
//     {id: '2', name: 'PRODUCTO 2', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
//     {id: '3', name: 'PRODUCTO 3', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
//     {id: '4', name: 'PRODUCTO 4', categoria: 'remeras',stock: '100',price: '1500',  foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg'},
//     {id: '5', name: 'PRODUCTO 5', categoria: 'remeras',stock: '100',price: '1500',  foto:'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-ma-rj-121-d79c09e8f970c42fe315911959190667-1024-1024.jpg'}
// ]


export const gFetch = (id) => {
    // comporobaciones

    return new Promise( ( resuleto, rechazada ) => {
        // ACCIONES
        
        setTimeout(()=>{
            resuleto( id ? obj.find( item => item.id === id ) : obj )
        }, 2000)
        // rechazada('promesa rechazada')
    })
    // .catch()
}

