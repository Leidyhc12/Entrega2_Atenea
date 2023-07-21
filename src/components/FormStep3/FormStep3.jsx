import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import './FormStep3.css'


const FormStep3 = ({show,setShow,setIsValid,formData,setFormData}) => {

  useEffect(() => {
    console.log(formData[2].data)
    const formValido = Object.values(formData[2].data).every(value => value !== "");
    if(formData[2].data.valorInversion==0){
      setIsValid(false);
    }
    else{
      setIsValid(formValido);
    }
    
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  const initialValues = {
    ingresos: formData[2].data.ingresos,
    gastos: formData[2].data.gastos,
    ahorro: formData[2].data.ahorro,
    valorInversion: formData[2].data.valorInversion,
    haInvertido: formData[2].data.haInvertido,
    tipoInversion: formData[2].data.tipoInversion
  };
  const validate = (valores) => {

    let errores = {};

    const formCopy = formData;
    formCopy[2].data=valores;
    setFormData(formCopy);
    
    if ((valores.ingresos+"").length===0) {
      errores.ingresos = "Debe especificar sus ingresos";
    }
    if ((valores.gastos+"").length===0) {
      errores.gastos = "Ingrese un % de gastos";
    }
    else if(valores.gastos>100){
      errores.gastos = "El % debe estar entre 0 y 100";
    }


    if ((valores.ahorro+"").length===0) {
      errores.ahorro = "Ingrese un % de ahorro";
    }
    else if(valores.ahorro>100){
      errores.ahorro = "El % debe estar entre 0 y 100";
    }

    if (valores.valorInversion===0) {
      errores.valorInversion = "La inversion debe ser mayor a cero";
    }
    if (valores.haInvertido.length===0) {
      errores.haInvertido = "Seleccione una opcion";
    }
    if (valores.tipoInversion.length===0) {
      errores.tipoInversion = "Seleccione una opcion";
    }

    const formValido = Object.values(errores).every(value => value.length === 0);

    setIsValid(formValido);

    return errores;
  };

  const handleSubmit = () => {};

  const [inputSlider, setInputSlider] = useState(1000000);

  const formatoMoneda = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
      {({values,touched,handleSubmit,handleChange,handleBlur,errors,}) => (
    <form className={show ? 'formStep3 fadeIn' : 'formStep3 fadeOut'} action="">

      <section className='sec1Form3'>
        <article className='art1Sec1Form3'>
          <label htmlFor="">Ingresos <span>*</span></label>
          <input type="number" 
            name='ingresos'
            value={values.ingresos}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.ingresos && errors.ingresos && <div className='inputError'>{errors.ingresos}</div>}
        </article>
      </section>

      <section className='sec2Form3'>
        <article className='art1Sec2Form3'>
          <label htmlFor="">% Gastos <span>*</span></label>
          <input type="number" min={0} max={100}
            name='gastos'
            value={values.gastos}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.gastos && errors.gastos && <div className='inputError'>{errors.gastos}</div>}
        </article>
        <article className='art2Sec2Form3'>
          <label htmlFor="">% Ahorro <span>*</span></label>
          <input type="number" min={0} max={100}
            name='ahorro'
            value={values.ahorro}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.ahorro && errors.ahorro && <div className='inputError'>{errors.ahorro}</div>}
        </article>
      </section>

      <section className='sec3Form3'>
        <article className='art1Sec3Form3'>
          <label htmlFor="">¿Cuanto estaría dispuesto a invertir? <span>*</span></label>
          <div className="range">
            <div className="field">
              <input type="range" min={0} max={5000000} step={500000}
                name='valorInversion'
                value={values.valorInversion}
                onChange={handleChange}
              />
              {errors.valorInversion!=='' && <div className='inputError'>{errors.valorInversion}</div>}
            </div>
            <div className='sliderValue'>
              <span>{formatoMoneda.format(values.valorInversion)}</span>
            </div>
          </div>
          
        </article>
      </section>

      <section className='sec4Form3'>
        <article className='art1Sec4Form3'>
            <label htmlFor="">¿Alguna vez ha invertido? <span>*</span></label>
            <select id=""
            name='haInvertido'
            value={values.haInvertido}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" selected disabled hidden>Seleccionar</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
          {touched.haInvertido && errors.haInvertido && <div className='inputError'>{errors.haInvertido}</div>}
        </article>
        <article className='art1Sec4Form3'>
          <label htmlFor="">¿En qué ha invertido? <span>*</span></label>
          <select id=""
            name='tipoInversion'
            value={values.tipoInversion}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" selected disabled hidden>Seleccionar</option>
            <option value="Bonos">Bonos</option>
            <option value="Acciones">Acciones</option>
            <option value="ETFs">ETFs</option>
          </select>
          {touched.tipoInversion && errors.tipoInversion && <div className='inputError'>{errors.tipoInversion}</div>}
        </article>
      </section>
    </form>
    )}
    </Formik>
  );
};

export default FormStep3;
