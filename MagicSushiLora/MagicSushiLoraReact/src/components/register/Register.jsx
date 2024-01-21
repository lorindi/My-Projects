import { useContext, useState } from "react";
import { Contexts } from "../../contexts/Contexts";

export const Register = () => {
  const { registerSubmitHandler, getFault, clearFault } = useContext(Contexts);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerSubmitHandler(formData);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Username:</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={formData.rePassword}
            onChange={(e) =>
              setFormData({ ...formData, rePassword: e.target.value })
            }
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {getFault() && (
        <div>
          <p>{getFault()}</p>
          <button onClick={clearFault}>Clear Fault</button>
        </div>
      )}
    </div>
  );
};

