import { useContext, useState } from "react";
import { Contexts } from "../../contexts/Contexts";

export const Login = () => {
  const { onLoginSubmit, getError, clearError } = useContext(Contexts);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(formData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {getError() && (
        <div>
          <p>{getError()}</p>
          <button onClick={clearError}>Clear Error</button>
        </div>
      )}
    </div>
  );
};

