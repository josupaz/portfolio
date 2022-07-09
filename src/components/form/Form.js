import React, {useState} from 'react';
import "./Form.css";

const Formulario = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
                        autocomplete="off"
						type="text"
						name="nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

                <div>
					<label htmlFor="correo">Correo</label>
					<input
                        autocomplete="off"
						type="text"
						name="correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>




                <div>
					<label htmlFor="mensaje">Mensaje</label>
					<textarea
                        autocomplete="off"
						type="text"
						name="mensaje"
						id="mensaje"
                        cols="40"
                        rows="5"
					/>
				</div>



				

				<button type="submit">Enviar</button>
			</form>
		</>
	);
}
 
export default Formulario;