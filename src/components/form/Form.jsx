import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./Form.css";

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
					phone: '',
					mensaje: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Please enter your name'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'The name field can only contain letters'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Please enter an email'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'Enter a valid email'
					}

					// Validacion Telefono
					if(!valores.phone){
						errores.phone = 'Please enter a phone'
					} else if(!/^[0-9]+$/.test(valores.phone)){
						errores.phone = 'Enter a valid phone'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Form Send');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<div  className='container-form'>
					<Form className='formulario'>
						<div>
							<label htmlFor="nombre">Name</label>
							<Field
								autoComplete="off"
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder=""
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Email</label>
							<Field
								autoComplete="off"
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<label htmlFor="correo">Phone</label>
							<Field
								autoComplete="off"
								type="number" 
								id="phone" 
								name="phone" 
								placeholder="" 
							/>
							<ErrorMessage name="phone" component={() => (<div className="error">{errors.phone}</div>)} />
						</div>



						<div>
							<label htmlFor="message">Message</label>
							<Field className="textarea" name="mensaje" as="textarea" placeholder="" />
						</div>

						<button type="submit">Send</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
					</div>
				)}
			</Formik>
		</>
	);
}
 
export default Formulario;