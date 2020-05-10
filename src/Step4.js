import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step4 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Student's Grade Level</h2>

      <select id="grade" name="grade" placeholder="select">
        <option value="kindergarden">Kindergarden</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <input type="submit" />
    </form>
  );
};

export default Step4;
