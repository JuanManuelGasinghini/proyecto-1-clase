import "./FormCheckout.css"

const FormCheckout = ({ dataForm, handleChangeInput, senOrder }) => {
  return (
    <form className="Form" onSubmit={senOrder}>
      <input type="text" name="fullname" className="FullName" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Ingrese su nombre" autocomplete="name" required />
      <input type="number" name="phone" className="Phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="Ingrese su telefono" autocomplete="tel" required />
      <input type="email" name="email" className="Email" value={dataForm.email} onChange={handleChangeInput} placeholder="Ingrese su email" autocomplete="email" required />
      <input type="email" name="emailConfirm" className="ConfirmEmail" value={dataForm.emailConfirm} onChange={handleChangeInput} placeholder="Confirme su email" autocomplete="email" required />

      <button type="submit" className="Send">Enviar Orden</button>
    </form>
  )
}

export default FormCheckout