import React from "react";

const Step1 = ({ state, dispatch }) => {
  console.log(state);
  function handleStep1() {
    ({
      type: "update_fields",
      payload: { field: "firstName", value: event.target.value },
    });
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstname"
          onChange={(event) => {
            dispatch({ type: "update_fields", value: event.target.value });
          }}
          required
          minLength={2}
        ></input>

        <input
          type="text"
          placeholder="Enter your last name"
          name="lastname"
          onChange={(event) => {
            dispatch({ type: "update_fields", value: event.target.value });
          }}
          required
          minLength={2}
        ></input>

        <input
          type="date"
          placeholder="Select your data of birth"
          max="2026-03-06"
        ></input>
        <button onClick={handleStep1}>Next</button>
      </form>
    </>
  );
};

export default Step1;
