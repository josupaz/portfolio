import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Form.css";
import initEmailJs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [message, setMessage] = useState("");
  const [resp, setResp] = useState(null);

  const captcha = useRef(null);

  const PUBLIC_KEY = "YDFnYTL-fQoHfb-Xi";
  const SERVICE_ID = "service_vysp1vs";
  const TEMPLATE_ID = "template_odselwq";
  const SITE_KEY = "6LcA3PcgAAAAANKJ3HEleQPauiEKIpGcdlg8x83c";

  var verifyCallback =  () => {
    setResp(captcha.current.getValue());
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          phone: "",
          message: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Please enter your name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "The name field can only contain letters";
          } else {
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
          } else {
            setCorreo(valores.correo);
          }

          // Validacion Telefono
          if (!valores.phone) {
            errores.phone = "Please enter a phone";
          } else if (!/^[0-9]+$/.test(valores.phone)) {
            errores.phone = "Enter a valid phone";
          } else {
            setTelefono(valores.phone);
          }

          // Validacion Mensaje
          if (!valores.message) {
            errores.message = "Please enter a message";
          } else {
            setMessage(valores.message);
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          var today = new Date(),
            date =
              today.getDate() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getFullYear();

          console.log("resp", resp);

          const templateParams = {
            name: nombre,
            email: correo,
            phone: telefono,
            message: message,
            date: date,
            "g-recaptcha-response": resp,
          };

		  //Valida si acepto Recaptcha
          if(resp != null){

			initEmailJs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );

			cambiarFormularioEnviado(true);
			setTimeout(() => cambiarFormularioEnviado(false), 10000);
			setResp(null);
			captcha.current.reset();
			resetForm();
		  }else{
			alert("Please acept reCaptcha!");
		  }
          
        }}
      >
        {({ errors }) => (
          <div className="container-form">
            <Form className="formulario" method="POST">
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
                  component={() => (
                    <div className="error">{errors.message}</div>
                  )}
                />
              </div>
              <div className="recaptcha">
                <ReCAPTCHA ref={captcha} sitekey={SITE_KEY} onChange={verifyCallback} />
              </div>
              <br />
              <button type="submit">Send</button>
              {formularioEnviado && (
                <p className="exito">Form sent successfully!</p>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
