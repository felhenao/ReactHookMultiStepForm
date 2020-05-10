import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step5 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/step5");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>What do you want to accomplish?</h2>
      <>
        <input type="checkbox" name="continue" value="continue " id="continue" />
        <label for="continue">Keep up with</label>
      </>
      {/* <input type="checkbox" name="" value=""> */}
      
        
      <input type="submit" />
    </form>
  );
};

export default Step5;
