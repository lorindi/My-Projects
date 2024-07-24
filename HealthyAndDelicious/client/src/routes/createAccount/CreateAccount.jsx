import { useState } from 'react';
import './CreateAccount.scss';

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = { name: '', email: '', password: '', confirmPassword: '' };

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters!';
      isValid = false;
    }
    
    if (!formData.email || formData.email.length < 3) {
      newErrors.email = 'Email must be at least 3 characters!';
      isValid = false;
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required!';
      isValid = false;
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div className="sectionCreateAccount">
      <form className="createAccountForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className="labelCreateAccountForm">
          Name
        </label>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          className="inputCreateAccountForm"
        />
        {errors.name && (
          <div className="loginFormInputError">
            <p className="error">{errors.name}</p>
          </div>
        )}

        <label htmlFor="email" className="labelCreateAccountForm">
          Email
        </label>
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          className="inputCreateAccountForm"
        />
        {errors.email && (
          <div className="loginFormInputError">
            <p className="error">{errors.email}</p>
          </div>
        )}

        <label htmlFor="password" className="labelCreateAccountForm">
          Password
        </label>
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          className="inputCreateAccountForm"
        />

        <label htmlFor="confirmPassword" className="labelCreateAccountForm">
          Confirm Password
        </label>
        <input
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="inputCreateAccountForm"
        />
        {errors.confirmPassword && (
          <div className="createAccountFormInputError">
            <p className="error">{errors.confirmPassword}</p>
          </div>
        )}

        <button
          type="submit"
          className="buttonCreateAccountForm"
          style={{
            backgroundColor:
              errors.name ||
              errors.email ||
              errors.password ||
              errors.confirmPassword
                ? 'lightgray'
                : 'orange',
          }}
          disabled={
            errors.name ||
            errors.email ||
            errors.password ||
            errors.confirmPassword
          }
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
