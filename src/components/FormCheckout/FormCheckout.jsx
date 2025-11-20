import "./FormCheckout.css"

const FormCheckout = ({dataForm, handleChangeInput, senOrder}) => {
  return (
       <form className="Form" onSubmit={senOrder}>
<input type="text" name="fullname" className="FullName" value={dataForm.fullname}  onChange={handleChangeInput} placeholder="Ingrese su nombre"/>
<input type="text" name="phone" className="Phone" value={dataForm.phone}  onChange={handleChangeInput} placeholder="Ingrese su telefono"/>
<input type="email" name="email" className="Email" value={dataForm.email}  onChange={handleChangeInput} placeholder="Ingrese su email"/>
<input type="email" name="emailConfirm" className="ConfirmEmail" value={dataForm.emailConfirm}  onChange={handleChangeInput} placeholder="Confirme su email"/>

<button type="submit" className="Send">Enviar Orden</button>
        </form>
  )
}

export default FormCheckout