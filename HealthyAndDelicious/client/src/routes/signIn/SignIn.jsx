import { useState } from "react";
import "./SignIn.scss";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const [touched, setTouched] = useState({
    name: false,
    password: false,
  });

  const validatePassword = () => {
    if (!password) {
      return 'Password is required!';
    }
    if (password.length < 6) {
      return 'Password should have more than 6 characters!';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordError = validatePassword();
    if (passwordError) {
      setErrors(passwordError);
      return;
    }
  };

  const handleBlur = (field) => (e) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const passwordError = validatePassword();
  const isFormInvalid = !email || passwordError;

  return (
    <div className="signInSection">
      <form className="signInForm" onSubmit={handleSubmit}>
        <label htmlFor="email" className="signInFormLabel">
          Email
        </label>
        <input
          type="text"
          name="email"
          className={`signInFormInput ${
            touched.name && !email ? "signInFormInputError" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur("email")}
          required
        />

        <label htmlFor="password" className="signInFormLabel">
          Password
        </label>
        <input
          type="password"
          name="password"
          className={`signInFormInput ${
            touched.password && passwordError ? "signInFormInputError" : ""
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlur("password")}
          required
        />

        {touched.password && passwordError && (
          <p className="error">{passwordError}</p>
        )}

        {errors && <p className="mainError">{errors}</p>}

        <button
          type="submit"
          disabled={isFormInvalid}
          style={{ backgroundColor: isFormInvalid ? "lightgray" : "orange" }}
          className="signInFormButton"
        >
          SignIn
        </button>

      </form>
    </div>
  );
}

export default SignIn;
