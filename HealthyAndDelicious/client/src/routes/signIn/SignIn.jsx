import { useState } from "react";
import "./SignIn.scss";

function SignIn() {
 

  return (
    <div className="signInSection">
      <form className="signInForm" >
        <label htmlFor="email" className="signInFormLabel">
          Email
        </label>
        <input
          type="text"
          name="email"

        />

        <label htmlFor="password" className="signInFormLabel">
          Password
        </label>
        <input
          type="password"
          name="password"

        />

    
          <p className="error"></p>
        

   

        <button
          type="submit"
          className="signInFormButton"
        >
          SignIn
        </button>

      </form>
    </div>
  );
}

export default SignIn;
