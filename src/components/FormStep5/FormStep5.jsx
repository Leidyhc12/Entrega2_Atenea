import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import baseRing from '../../assets/baseRing.svg'
import needle from '../../assets/needle.svg'
import './FormStep5.css'


const FormStep5 = ({show,setShow,setIsValid,formData,setFormData,nivelInversion}) => {

  const [circleCheck,setCicleCheck] = useState(false);
  const [rotatePercent,setRotatePercent] = useState(20);

  useEffect(() => {
    let puntaje = 0;
    nivelInversion.forEach(element => {
      puntaje+=element;
    });
    setRotatePercent((100/12)*puntaje);
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <form className={show ? 'formStep5 fadeIn' : 'formStep5 fadeOut'} action="">

      <section className='sec1Form5'>
        <article className='art1Sec1Form5'>
          <img className='baseRing' src={baseRing} alt="" />
          <img 
            className='needle' 
            src={needle} 
            alt="" 
            style={{transform:`rotate(${circleCheck?(180/100)*rotatePercent:0}deg)`}}
            />
        </article>
        <article className='art2Sec1Form5'>
          <label htmlFor="">Niveles</label>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>{"Prudente (De 0 a 4)"}</th>
              </tr>
              <tr>
                <th></th>
                <th>{"Observador (De 5 a 8)"}</th>
              </tr>
              <tr>
                <th></th>
                <th>{"Arriesgado (Más de 8)"}</th>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section className='sec2Form5'>
        <article className='art1Sec2Form5'>
          <div className='customCheckDiv' onClick={()=>{setCicleCheck(!circleCheck)}}>
            <div 
              className={circleCheck?'circleChecked':''}>
            </div>
          </div>
          <label htmlFor="">Conoce en que nivel estas</label>
        </article>
      </section>
    </form>
  );
};

export default FormStep5;
