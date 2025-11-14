import React from 'react'

const FormCheckout = ({dataForm, handleChangeInput, senOrder}) => {
  return (
       <form onSubmit={senOrder}>
<input type="text" name="fullname" value={dataForm.fullname}  onChange={handleChangeInput} placeholder="Ingrese su nombre"/>
<input type="text" name="phone" value={dataForm.phone}  onChange={handleChangeInput} placeholder="Ingrese su telefono"/>
<input type="email" name="email" value={dataForm.email}  onChange={handleChangeInput} placeholder="Ingrese su email"/>
<input type="email" name="emailConfirm" value={dataForm.emailConfirm}  onChange={handleChangeInput} placeholder="Confirme su email"/>

<button type="submit">Enviar Orden</button>
        </form>
  )
}

export default FormCheckout