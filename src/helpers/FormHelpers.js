import { Filter } from "bad-words";

const filter = new Filter();

function isEmail(str) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!str.match(emailRegex)) return false;
  return true;
}

class FormHelpers {
  static handleFormChange = (e, setFormData) => {
    let { name, value } = e.target;
    let maxLength = 20;
    if (name == "username") maxLength = 20;

    setFormData(data => ({
      ...data,
      [name]: value.replace(/\s/g, "").slice(0, maxLength),
    }));
  };
  // isValidSignup - this is a validation function for the sign up form. This function returns an array, first index is a boolean second index is an error string.
  static isValidSignup = formData => {
    const { username, password, email, firstName, lastName } = formData;
    // does username fit length and character restriction?
    if (username.includes(" "))
      return [false, "Username cannot contain spaces"];
    if (username.length <= 5)
      return [false, "Username must be longer than 5 characters"];
    if (username.length > 20)
      return [false, "Username cannot exceed 20 characters"];
    // username clears bad words filter?
    const filtered = filter.clean(username);
    if (filtered != username)
      return [false, "Username is not allowed, please choose another"];
    // password valid?
    if (password.includes(" "))
      return [false, "Password cannot contain spaces"];
    if (password.length <= 5)
      return [false, "Password must be longer than 5 characters"];
    if (password.length > 20)
      return [false, "Password cannot exceed 20 characters"];
    // email valid?
    if (!isEmail(email)) return [false, "Email must be an email address"];
    // first name valid?
    if (firstName.length == 0) return [false, "Please enter a first name"];
    if (firstName.length > 20)
      return [false, "First name cannot exceed 20 characters"];
    // last name valid?
    if (lastName.length == 0) return [false, "Please enter a last name"];
    if (lastName.length > 30)
      return [false, "Last name cannot exceed 30 characters"];
    return [true, ""];
  };
}

export default FormHelpers;
