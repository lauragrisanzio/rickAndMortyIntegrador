const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassNumber = /.*\d+.*/

const validator = (data) => {

  let errors = {}
   
    if (!regexEmail.test(data.email)) {
     errors.e1 = "Debe ingresar un mail válido" };
    
    if (!data.email) {
    errors.e2 = "Debe ingresar un mail"
  };
  
    if (data.email.length > 35) {
    errors.e3 = "No puede superar los 35 caracteres";
  };

    if (!regexPassNumber.test(data.password)) {
       errors.p1 = "Debe contener al menos un número" }
        
    if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = "Dene tener entre 6 a 10 caracteres";
  }
  return errors
    
};


export default validator