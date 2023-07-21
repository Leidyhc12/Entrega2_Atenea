import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './FormStep4.css'



const FormStep4 = ({show,setShow,setIsValid,formData,setFormData,nivelInversion,setNivelInversion}) => {

  useEffect(() => {
    const formValido = Object.values(formData[3].data).every(value => value !== "");
    if(formValido){
      setNivelInversion(Object.values(formData[3].data).map((item)=>parseInt(item)))
    }
    setIsValid(formValido);
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  const initialValues = {
    pregunta1: formData[3].data.pregunta1,
    pregunta2: formData[3].data.pregunta2,
    pregunta3: formData[3].data.pregunta3,
    pregunta4: formData[3].data.pregunta4
  };
  const validate = (valores) => {

    console.log(valores)

    let errores = {};

    const formCopy = formData;
    formCopy[3].data=valores;
    setFormData(formCopy);

    let copiaArr = [...nivelInversion];
    

    if (valores.pregunta1 === undefined || valores.pregunta1.length===0) {
      errores.pregunta1 = "Debe seleccionar una opción";
    }
    else{
      copiaArr[0] = parseInt(valores.pregunta1);
    }

    if (valores.pregunta2 === undefined || valores.pregunta2.length===0) {
      errores.pregunta2 = "Debe seleccionar una opción";
    }
    else{
      copiaArr[1] = parseInt(valores.pregunta2);
    }

    if (valores.pregunta3 === undefined || valores.pregunta3.length===0) {
      errores.pregunta3 = "Debe seleccionar una opción";
    }
    else{
      copiaArr[2] = parseInt(valores.pregunta3);
    }
    
    if (valores.pregunta4 === undefined || valores.pregunta4.length===0) {
      errores.pregunta4 = "Debe seleccionar una opción";
    }
    else{
      copiaArr[3] = parseInt(valores.pregunta4);
      
    }
    console.log(copiaArr)
    setNivelInversion(copiaArr);

    const formValido = Object.values(errores).every(value => value.length === 0);

    setIsValid(formValido);

    return errores;
  };

  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
      {({values,touched,handleSubmit,handleChange,handleBlur,errors}) => (
    <form className={show ? 'formStep4 fadeIn' : 'formStep4 fadeOut'} action="">

      <section className='sec1Form4'>
        <article className='art1Sec1Form4'>
          <label htmlFor="">Al momento de hacer una inversión, disponer del dinero de forma inmediata es: <span>*</span></label>
            <select 
              name="pregunta1"
              value={values.pregunta1}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" selected disabled hidden>Seleccionar</option>
              <option value="1">Muy relevante</option>
              <option value="2">Algo relevante</option>
              <option value="3">Nada relevante</option>
            </select>
            {touched.pregunta1 && errors.pregunta1 && <div className='inputError'>{errors.pregunta1}</div>}
        </article>
      </section>

      <section className='sec2Form4'>
        <article className='art1Sec1Form4'>
          <label htmlFor="">El periodo de tiempo en el que espera contar con la liquidez es: <span>*</span></label>
            <select 
              name="pregunta2"
              value={values.pregunta2}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" selected disabled hidden>Seleccionar</option>
              <option value="1">Menos de 1 año</option>
              <option value="2">Entre 1 y 5 años</option>
              <option value="3">Mas de 5 años</option>
            </select>
            {touched.pregunta2 && errors.pregunta2 && <div className='inputError'>{errors.pregunta2}</div>}
        </article>
      </section>

      <section className='sec3Form4'>
        <article className='art1Sec1Form4'>
          <label htmlFor="">¿Cuál es el escenario que mejor se adecúa a las expectativas de tu compañía a la hora de invertir? <span>*</span></label>
            <select
              name="pregunta3"
              value={values.pregunta3}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" selected disabled hidden>Seleccionar</option>
              <option value="1">Prefiero contar con inversiones con un comportamiento constante</option>
              <option value="2">Me siento cómodo con movimientos de valorizaciones y desvalorizaciones</option>
              <option value="3">Me siento cómodo con inversiones con altas variaciones y ganancias</option>
            </select>
            {touched.pregunta3 && errors.pregunta3 && <div className='inputError'>{errors.pregunta3}</div>}
        </article>
      </section>

      <section className='sec4Form4'>
        <article className='art1Sec1Form4'>
          <label htmlFor="">Suponiendo una desvalorización en el valor de la inversión en el corto plazo, la decisión sería: <span>*</span></label>
            <select 
              name="pregunta4"
              value={values.pregunta4}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" selected disabled hidden>Seleccionar</option>
              <option value="1">Retirar la totalidad del dinero</option>
              <option value="2">Retirar una parte del dinero, para invertir en opciones más seguras</option>
              <option value="3">Esperar a que el portafolio se recupere y hacer inversiones adicionales</option>
            </select>
            {touched.pregunta4 && errors.pregunta4 && <div className='inputError'>{errors.pregunta4}</div>}
        </article>
      </section>
    </form>
    )}
    </Formik>
  );
};

export default FormStep4;
