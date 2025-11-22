import { useState, useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import FormCheckout from "../FormCheckout/FormCheckout";

import "./CheckOut.css";

const CheckOut = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        emailConfirm: ""
    });
    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(cartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    }
    const senOrder = (event) => {
        event.preventDefault();
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice()
        }
        upLoadOrder(order);
    }

    const upLoadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);
        } catch (error) {
            console.log("Error al subir la orden");
        }
    }



    return (
        <div>
            {
                orderId ? (
                    <div className="Order">
                        <h2 className="TitleOrder">Orden Generada Correctamente</h2>
                        <p className="TextOrder">guarde el identificador de su compra: {orderId}</p>
                    </div>
                ) : (
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} senOrder={senOrder} />
                )
            }
        </div>
    )
}

export default CheckOut