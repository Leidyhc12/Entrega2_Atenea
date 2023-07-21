import React, { useEffect } from "react";
import { Formik } from "formik";
import "./FormStep1.css";


const FormStep1 = ({show,setShow,setIsValid,formData,setFormData}) => {
  
  useEffect(() => {
    const formValido = Object.values(formData[0].data).every(value => value !== "");
    setIsValid(formValido);
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

 

  const initialValues= {
    nombre: formData[0].data.nombre,
    apellido: formData[0].data.apellido,
    email: formData[0].data.email,
    tipoDoc: formData[0].data.tipoDoc,
    docNumber: formData[0].data.docNumber,
    fechaNacimiento: formData[0].data.fechaNacimiento,
    genero: formData[0].data.genero
  };


  const validate = (valores) => {

    let errores = {};

    const formCopy = formData;
    formCopy[0].data=valores;
    setFormData(formCopy);

    const validString = /^[a-zA-Z\s]+$/;
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (valores.nombre.length===0) {
      errores.nombre = "Debe ingresar un nombre";
    }
    else if(!validString.test(valores.nombre)){
      errores.nombre = "El nombre solo debe contener letras";
    }


    if ( valores.apellido.length===0) {
      errores.apellido = "Debe ingresar un apellido";
    }
    else if(!validString.test(valores.apellido)){
      errores.apellido = "El apellido solo debe contener letras";
    }

    if (valores.email.length===0) {
      errores.email = "Debe ingresar un email";
    }
    else if(!validEmail.test(valores.email)){
      errores.email = "Debe ingresar un email valido";
    }


    if (valores.tipoDoc.length===0) {
      errores.tipoDoc = "Invalid";
    }
    if (valores.docNumber.length===0) {
      errores.docNumber = "Debe ingresar un número de documento";
    }
    else if((valores.docNumber+"").length>10){
      errores.docNumber = "La cedula contiene más de 10 digitos";
    }

    if (valores.fechaNacimiento.length===0) {
      errores.fechaNacimiento = "Debe ingresar una fecha";
    }
    if (valores.genero.length===0) {
      errores.genero = "Debe seleccionar un género";
    }

    const formValido = Object.values(errores).every(value => value.length === 0);

    setIsValid(formValido);

    return errores;

  };



  const handleSubmit = () => { };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({values,touched,handleSubmit,handleChange,handleBlur,errors}) => (
        <form
          className={show ? "formStep1 fadeIn" : "formStep1 fadeOut"}
          action=""
        >
          <section className="sec1Form1">
            <article className="art1Sec1Form1">
              <label htmlFor="">
                Nombre <span>*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="inputError">{errors.nombre}</div>
              )}
            </article>

            <article className="art2Sec1Form1">
              <label htmlFor="">
                Apellido <span>*</span>
              </label>
              <input
                type="text"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.apellido && errors.apellido && (
                <div className="inputError">{errors.apellido}</div>
              )}
            </article>
          </section>

          <section className="sec2Form1">
            <article className="art1Sec2Form1">
              <label htmlFor="">
                Correo Electronico <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="inputError">{errors.email}</div>
              )}
            </article>
          </section>

          <section className="sec3Form1">
            <article className="art1Sec3Form1">
              <label htmlFor="">
                Tipo <span>*</span>
              </label>
              <select
                name="tipoDoc"
                value={values.tipoDoc}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" selected disabled hidden>
                  --
                </option>
                <option value="Cedula">CC</option>
                <option value="Document">DNI</option>
                <option value="Pasaporte">PS</option>
              </select>
              {touched.tipoDoc && errors.tipoDoc && (
                <div className="inputError">{errors.tipoDoc}</div>
              )}
            </article>
            <article className="art2Sec3Form1">
              <label htmlFor="">
                Numero identificación <span>*</span>
              </label>
              <input
                type="number"
                name="docNumber"
                value={values.docNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.docNumber && errors.docNumber && (
                <div className="inputError">{errors.docNumber}</div>
              )}
            </article>
          </section>

          <section className="sec4Form1">
            <article className="art1Sec4Form1">
              <label htmlFor="">
                Fecha Nacimiento <span>*</span>
              </label>
              <input
                type="date"
                name="fechaNacimiento"
                value={values.fechaNacimiento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.fechaNacimiento && errors.fechaNacimiento && (
                <div className="inputError">{errors.fechaNacimiento}</div>
              )}
            </article>
            <article className="art2Sec4Form1">
              <label htmlFor="">
                Género <span>*</span>
              </label>
              <select 
                id=""
                name="genero"
                value={values.genero}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" selected disabled hidden>
                  Seleccionar
                </option>
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
                <option value="Otros">Otros</option>
              </select>
              {touched.genero && errors.genero && (
                <div className="inputError">{errors.genero}</div>
              )}
            </article>
          </section>
        </form>
      )}
    </Formik>
  );
};

export default FormStep1;
