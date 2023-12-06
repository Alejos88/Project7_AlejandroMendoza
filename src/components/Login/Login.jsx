import  "./Login.css"

const Login = () => {
  return (
<main className="contenedorlogin">
  <div className="contenedorformulario>">
   <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Usuario</span>
  <input
   type="text" 
   class="form-control" 
   placeholder="Ingrese usuario" 
   aria-label="Username" 
   aria-describedby="basic-addon1"/>
</div>

<div className="contenedorformulario>">
   <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Contraseña</span>
  <input
   type="Password" 
   class="form-control" 
   placeholder="Ingrese contraseña" 
   aria-label="Username" 
   aria-describedby="basic-addon1"/>
</div>
<button type="button" className="button" class="btn btn-outline-secondary">Login</button>
</div>
</div>
</main> 
 )
}

 export default Login
