import React, {useState} from 'react';
import "./Form.css";

const Form = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
	const [inputTel, cambiarInputTel] = useState('');

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

		// Funcion que se encarga de cambiar el estado del inputCorreo
		const handleInputTel = (e) => {
			cambiarInputTel(e.target.value);
		}

	return (
		<div className='container-form'>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Name</label>
					<input
						autocomplete="off"
						type="text"
						name="nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
						maxLength="30"
					/>
				</div>

                <div>
					<label htmlFor="correo">Email</label>
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
					<label htmlFor="telefono">Phone</label>
					<input
						autocomplete="off"
						type="number"
						name="tel"
						id="tel"
						value={inputTel}
						onChange={handleInputTel}
					/>
				</div>




                <div>
					<label htmlFor="mensaje">Message</label>
					<textarea
						autocomplete="off"
						type="text"
						name="mensaje"
						id="mensaje"
                        cols="40"
                        rows="5"
					/>
				</div>



				

				<button type="submit">Send</button>
			</form>
		</div>
	);
}
 
export default Form;