// // Cart.jsx
// import "react";
// import { useCart } from "./CartUtils";
// import CartItem from "./CartItem"; // Asegúrate de tener este componente creado

// const Cart = () => {
//     const { cartItems } = useCart();

//     return (
//         <div className="neumorphism p-4 rounded-md m-2 text-center">
//             <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>

//             {cartItems.length === 0 ? (
//                 <p>No hay productos en el carrito</p>
//             ) : (
//                 <div>
//                     {cartItems.map((item) => (
//                         <CartItem key={item.producto.id} item={item} />
//                     ))}

//                     <div className="mt-4">
//                         <p className="text-lg font-semibold">
//                             Precio total:{" "}
//                             {/* Agrega aquí el cálculo del precio total */}
//                         </p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
//                             Comprar
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// Cart.propTypes = {};

// export default Cart;


// // CartItem.jsx
// import "react";
// import PropTypes from "prop-types";

// const CartItem = ({ item }) => {
//     if (!item || !item.producto || !item.producto.id) {
//         // Verificación para asegurarse de que item y producto estén definidos
//         return null; // O maneja la situación de otra manera según tus necesidades
//     }

//     const { producto, cantidad } = item;

//     return (
//         <div className="neumorphism p-2 rounded-md m-2 text-center">
//             <img
//                 src={producto.imagen} // Asegúrate de tener la propiedad imagen en tu objeto de producto
//                 alt={producto.nombre}
//                 className="w-32 h-32 object-cover mb-2"
//             />
//             <p className="text-white">Producto: {producto.nombre}</p>
//             <p className="text-white">Cantidad: {cantidad}</p>
//             <p className="text-white">Precio unitario: ${producto.precio}</p>
//             <p className="text-white">Subtotal: ${cantidad * producto.precio}</p>
//         </div>
//     );
// };

// CartItem.propTypes = {
//     item: PropTypes.shape({
//         producto: PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             nombre: PropTypes.string.isRequired,
//             precio: PropTypes.number.isRequired,
//             imagen: PropTypes.string.isRequired,
//             // Agrega más propiedades según la estructura de tu objeto de producto
//         }),
//         cantidad: PropTypes.number.isRequired,
//     }).isRequired,
// };

// export default CartItem;

import "react";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
    if (!item || !item.producto || !item.producto.id || item.cantidad === undefined) {
        return null;
    }

    const { producto, cantidad } = item;

    return (
        <div className="neumorphism p-2 rounded-md m-2 text-center">
            <img
                src={producto.imagen} // Asegúrate de tener la propiedad imagen en tu objeto de producto
                alt={producto.nombre}
                className="w-32 h-32 object-cover mb-2"
            />
            <p className="text-white">Producto: {producto.nombre}</p>
            <p className="text-white">Cantidad: {cantidad}</p>
            <p className="text-white">Precio unitario: ${producto.precio}</p>
            <p className="text-white">Subtotal: ${cantidad * producto.precio}</p>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        producto: PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
            imagen: PropTypes.string.isRequired,
        }),
        cantidad: PropTypes.number,
    }).isRequired,
};

export default CartItem;
