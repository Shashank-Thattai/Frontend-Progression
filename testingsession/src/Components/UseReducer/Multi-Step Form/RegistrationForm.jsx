import React, { useReducer } from "react";
import formReducer, { initialFormState } from "./formReducer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  return (
    <>
      {state.step === 1 && <Step1 state={state} dispatch={dispatch} />}
      {state.step === 2 && <Step2 state={state} dispatch={dispatch} />}
      {state.step === 3 && <Step3 state={state} dispatch={dispatch} />}
    </>
  );
};

export default RegistrationForm;
