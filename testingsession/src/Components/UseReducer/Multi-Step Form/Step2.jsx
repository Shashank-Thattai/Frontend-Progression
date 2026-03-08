import React from "react";

const Step2 = () => {
  return (
    <>
      <form>
        <input type="email" placeholder="Enter your email" required></input>

        <input
          type="password"
          placeholder="Enter your passwork"
          required
          minLength={8}
        ></input>
      </form>
    </>
  );
};

export default Step2;
