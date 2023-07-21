import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FormStep1 from "./components/FormStep1/FormStep1";
import StepIcon from "./components/StepIcon/StepIcon";
import FormStepIcons from "./components/FormStepIcons/FormStepIcons";
import FormStep2 from "./components/FormStep2/FormStep2";
import FormStep3 from "./components/FormStep3/FormStep3";
import FormStep4 from "./components/FormStep4/FormStep4";
import FormStep5 from "./components/FormStep5/FormStep5";
import Resume from "./components/Resume/Resume";
import {Button} from "./components/Button/Button.jsx";

function App() {
  const [stepNumber, setStepNumber] = useState(1);
  const [show, setShow] = useState(false);
  const [nivelInversion,setNivelInversion] = useState([0,0,0,0]);
  const [isValid, setIsValid] = useState(false);
  const [formData,setFormData] = useState(
    [
      {
        "name": "Datos Personales",
        "data": {
          "nombre": "",
          "apellido": "",
          "email": "",
          "tipoDoc": "",
          "docNumber": "",
          "fechaNacimiento": "",
          "genero": ""
        }
      },
      {
        "name": "Datos Laborales",
        "data": {
          "nombreEmpresa": "",
          "tipoContrato": "",
          "numTelefono": "",
          "fechaIngreso": "",
          "salario": ""
        }
      },
      {
        "name": "Informacion Financiera",
        "data": {
          "ingresos": "",
          "gastos": "",
          "ahorro": "",
          "valorInversion": "",
          "haInvertido": "",
          "tipoInversion": ""
        }
      },
      {
        "name": "Nivel de Riesgo",
        "data": {
          "pregunta1": "",
          "pregunta2": "",
          "pregunta3": "",
          "pregunta4": ""
        }
      }
    ]
  )

  const handleClickNext = () => {
    console.log("first")
    if (stepNumber === 6) return;
    setStepNumber(stepNumber + 1);
  };

  const handleClickBack = () => {
    if (stepNumber === 1) return;
    setStepNumber(stepNumber - 1);
  };

  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <div className="homePage">
      <div className="mainContainer">
        <FormStepIcons stepNumber={stepNumber} />
        <div className="formContainer">
          {stepNumber === 1 && <FormStep1 show={show} setShow={setShow} setIsValid={setIsValid} formData={formData} setFormData={setFormData}/>}
          {stepNumber === 2 && <FormStep2 show={show} setShow={setShow} setIsValid={setIsValid} formData={formData} setFormData={setFormData}/>}
          {stepNumber === 3 && <FormStep3 show={show} setShow={setShow} setIsValid={setIsValid} formData={formData} setFormData={setFormData}/>}
          {stepNumber === 4 && <FormStep4 show={show} setShow={setShow} setIsValid={setIsValid} formData={formData} setFormData={setFormData} nivelInversion={nivelInversion} setNivelInversion={setNivelInversion}/>}
          {stepNumber === 5 && <FormStep5 show={show} setShow={setShow} setIsValid={setIsValid} formData={formData} setFormData={setFormData} nivelInversion={nivelInversion}/>}
          {stepNumber === 6 && <Resume formData={formData}/>}
        </div>
        <div className="btnNavigation">
          <Button
            label="ATRAS"
            funcionClick={handleClickBack}
            styles={stepNumber===1?'hidden':'visible'}
            disabled={false}
          >
          </Button>
          <Button
            label={stepNumber !== 6 ? "SIGUIENTE" : "ENVIAR"}
            funcionClick={handleClickNext}
            disabled={!isValid?true:false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
