
function CreateAccount() {
  

  return (
    <div className="sectionCreateAccount">
      <form className="createAccountForm">
        <label htmlFor="name" className="labelCreateAccountForm">
          Name
        </label>
        <input

          type="text"
          id="name"
          name="name"
          className="inputCreateAccountForm"
        />


        <label htmlFor="email" className="labelCreateAccountForm">
          Email
        </label>
        <input

          type="email"
          id="email"
          name="email"
          className="inputCreateAccountForm"
        />
     

        <label htmlFor="password" className="labelCreateAccountForm">
          Password
        </label>
        <input
     
          type="password"
          id="password"
          name="password"
          className="inputCreateAccountForm"
        />

        <label htmlFor="confirmPassword" className="labelCreateAccountForm">
          Confirm Password
        </label>
        <input

          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="inputCreateAccountForm"
        />
     

        <button
          type="submit"
          className="buttonCreateAccountForm"

 
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
