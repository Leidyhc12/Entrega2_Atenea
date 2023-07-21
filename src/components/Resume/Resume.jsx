import React, { useEffect, useState } from 'react';

import './Resume.css'


const Resume = ({formData}) => {

  const formatoMoneda = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  });

  return(
    <div className='divResume'>
      {
        formData.map((form)=>{
          console.log(form.name)
          return(
            <section>
              <h3>{form.name}</h3>
              <table>
                <tbody>
                {
                  Object.entries(form.data).map(([key,value])=>{
                    return(
                      <tr>
                        <td>{key}</td>
                          <td>
                            {(key==='salario' || key==='valorInversion')?formatoMoneda.format(value):value}
                          </td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </section>
          )
        })
      }
    </div>
  )
};

export default Resume;
