import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import "./FormStep2.css";


const FormStep2= ({show,setShow,setIsValid,formData,setFormData}) => {
  
  useEffect(() => {
    const formValido = Object.values(formData[1].data).every(value => value !== "");
    setIsValid(formValido);
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  const initialValues = {
    nombreEmpresa: formData[1].data.nombreEmpresa,
    tipoContrato: formData[1].data.tipoContrato,
    numTelefono: formData[1].data.numTelefono,
    fechaIngreso: formData[1].data.fechaIngreso,
    salario: formData[1].data.salario
  };
  const validate = (valores) => {

    let errores = {};

    const formCopy = formData;
    formCopy[1].data=valores;
    setFormData(formCopy);

    const validString = /^[a-zA-Z\s]+$/;
    const validNumCel = /^3\d{9}$/;


    if (valores.nombreEmpresa.length===0) {
      errores.nombreEmpresa = "Debe ingresar un nombre de empresa";
    }
    else if(!validString.test(valores.nombreEmpresa)){
      errores.nombreEmpresa = "El nombre de empresa solo debe contener letras";
    }

    if (valores.tipoContrato.length===0) {
      errores.tipoContrato = "Debe especificar un tipo de contrato";
    }
    if (valores.numTelefono.length===0) {
      errores.numTelefono = "Debe ingresar un telefono de contacto";
    }
    else if(!validNumCel.test(valores.numTelefono+"")){
      errores.numTelefono = "Número de celular invalido";
    }

    if (valores.fechaIngreso.length===0) {
      errores.fechaIngreso = "Fecha invalida";
    }
    if (valores.salario.length===0) {
      errores.salario = "Debe ingresar un valor";
    }

    const formValido = Object.values(errores).every(value => value.length === 0);

    setIsValid(formValido);


    return errores;
  };

  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
      {({values,touched,handleSubmit,handleChange,handleBlur,errors,}) => (
        <form
          className={show ? "formStep2 fadeIn" : "formStep2 fadeOut"}
          action=""
        >
          <section className="sec1Form2">
            <article className="art1Sec1Form2">
              <label htmlFor="">
                Nombre Empresa <span>*</span>
              </label>
              <input type="text" 
                name='nombreEmpresa'
                value={values.nombreEmpresa}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombreEmpresa && errors.nombreEmpresa && <div className='inputError'>{errors.nombreEmpresa}</div>}
            </article>
          </section>

          <section className="sec2Form2">
            <article className="art1Sec2Form2">
              <label htmlFor="">
                Tipo de Contrato <span>*</span>
              </label>
              <select id=""
                name="tipoContrato"
                value={values.tipoContrato}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" selected disabled hidden>
                  Seleccionar
                </option>
                <option value="Mujer">Laboral</option>
                <option value="Hombre">Independiente</option>
                <option value="Otros">Otros</option>
              </select>
              {touched.tipoContrato && errors.tipoContrato && <div className='inputError'>{errors.tipoContrato}</div>}
            </article>
          </section>

          <section className="sec3Form2">
            <article className="art1Sec3Form2">
              <label htmlFor="">
                Teléfono de Contacto <span>*</span>
              </label>
              <input type="number" 
                name="numTelefono"
                value={values.numTelefono}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.numTelefono && errors.numTelefono && <div className='inputError'>{errors.numTelefono}</div>}
            </article>
          </section>

          <section className="sec4Form2">
            <article className="art1Sec4Form2">
              <label htmlFor="">
                Fecha de Ingreso <span>*</span>
              </label>
              <input type="date" 
                name="fechaIngreso"
                value={values.fechaIngreso}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.fechaIngreso && errors.fechaIngreso && <div className='inputError'>{errors.fechaIngreso}</div>}
            </article>
            <article className="art2Sec4Form2">
              <label htmlFor="">
                Salario <span>*</span>
              </label>
              <input type="number" 
                name="salario"
                value={values.salario}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.salario && errors.salario && <div className='inputError'>{errors.salario}</div>}
            </article>
          </section>
        </form>
      )}
    </Formik>
  );
};

export default FormStep2;
