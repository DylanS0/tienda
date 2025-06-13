import { useState } from "react";
import { CarritoContext } from "./CarritoContext";

const CarritoProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregar = (producto) => {
        setCart((currItems) => {
            const isItemInCart = currItems.find((item) => item.id === producto.id);
            if (isItemInCart) {
                return currItems.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...currItems, { ...producto, cantidad: 1 }];
            }
        });
    };

    const eliminar = (producto) => {
        setCart((currItems) => {
            const existingItem = currItems.find((item) => item.id === producto.id);
            if (!existingItem) return currItems;

            if (existingItem.cantidad === 1) {
                return currItems.filter((item) => item.id !== producto.id);
            } else {
                return currItems.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                );
            }
        });
    };

    const vaciar = () => {
        setCart([]);
        alert("Carrito vaciado");
    };

    const comprar = () => {
        fetch('https://dummyjson.com/carts/add',  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: cart.map((item) => ({
                    id: item.id,
                    quantity: item.cantidad
                }))
            })
        })
        .then((res) => res.json())
        .then(console.log)
        .catch((error) => console.error(error));

        alert("Gracias por su compra");
        setCart([]);
    };

    return (
        <CarritoContext.Provider value={{ cart, agregar, vaciar, eliminar, comprar }}>
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoProvider;
