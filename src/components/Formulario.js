export default function Formulario(){
    return(
        <form>
            
            <label>Email</label>
            <input type="text" name="correo"/>
            <label>Contraseña</label>
            <input type="text" name="contraseña"/>
            <button>Enviar</button>
        </form>
    )
}