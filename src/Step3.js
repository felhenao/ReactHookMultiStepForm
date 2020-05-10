import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step3 = props => {
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
      <h2>Parent/Guardian Contact Info</h2>
      <label>
        
        <input
          name="email"
          placeholder="Email Address"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="firstName" as="p" />
      </label>

      <label>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step3;
