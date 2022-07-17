import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Form.css";
import initEmailJs from "@emailjs/browser";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const PUBLIC_KEY = 'YDFnYTL-fQoHfb-Xi';
  const SERVICE_ID = 'service_vysp1vs';
  const TEMPLATE_ID = 'template_odselwq';

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          phone: "",
          mensaje: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Please enter your name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "The name field can only contain letters";
          }else{
			setNombre(valores.nombre);
		  }

          // Validacion correo
          if (!valores.correo) {
            errores.correo = "Please enter an email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo = "Enter a valid email";
          }else{
			setCorreo(valores.correo);
		  }

          // Validacion Telefono
          if (!valores.phone) {
            errores.phone = "Please enter a phone";
          } else if (!/^[0-9]+$/.test(valores.phone)) {
            errores.phone = "Enter a valid phone";
          }else{
			setTelefono(valores.phone);
		  }

		  
          // Validacion Mensaje
          if (!valores.message) {
            errores.message = "Please enter a message";
          } else  {
			setMensaje(valores.message);
		  }
  

          return errores;
        }}

        onSubmit={(valores, { resetForm }) => {
		  var today = new Date(),
            date = today.getDate() + '-' +(today.getMonth() + 1) + '-' + today.getFullYear();

          const templateParams = {
            name: nombre,
			email: correo,
			phone: telefono,
			message: mensaje,
			date: date
          };

          initEmailJs.init(PUBLIC_KEY);
          initEmailJs
            .send( SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );
          console.log("Form Send");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
		  const msgField = document.getElementById('message');
			  msgField.append('');
          resetForm();
        }}
      >
        {({ errors }) => (
          <div className="container-form">
            <Form method="POST" className="formulario">
              <div>
                <label htmlFor="nombre">Name</label>
                <Field
                  autoComplete="off"
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder=""
                />
                <ErrorMessage
                  name="nombre"
                  component={() => <div className="error">{errors.nombre}</div>}
                />
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
                <ErrorMessage
                  name="correo"
                  component={() => <div className="error">{errors.correo}</div>}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <Field
                  autoComplete="off"
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder=""
                />
                <ErrorMessage
                  name="phone"
                  component={() => <div className="error">{errors.phone}</div>}
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <Field
                  className="textarea"
                  name="message"
				  id="message"
                  as="textarea"
                  placeholder=""
                />
				<ErrorMessage
                  name="message"
                  component={() => <div className="error">{errors.message}</div>}
                />
              </div>
			  <div className="g-recaptcha" g-recaptcha-response='' data-sitekey="6LcA3PcgAAAAANKJ3HEleQPauiEKIpGcdlg8x83c"></div>
			  <br/>
              <button type="submit">Send</button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </Form>
			<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
    </script>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
