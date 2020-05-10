import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubit = data => {
    action(data);
    push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h2>Parent/Guardian's Name</h2>
      <label>
        <input
          name="pFirstName"
          placeholder="First Name"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="firstName" as="p" />
      </label>
      <label>
        <input
          name="pLastName"
          placeholder="Last Name"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step1;
