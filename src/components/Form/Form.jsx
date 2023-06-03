import React from "react";
import { useState } from "react";
import validator from "./Validation";
import styles from "./Form.module.css";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const property = event.target.name;
      const value = event.target.value;
      setErrors(validator({ ...userData, [property]: value }));
      //seteamos los errores en nuestro estado
      setUserData({ ...userData, [property]: value });     
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    login (userData)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}
        </div>
        <div>
          <label htmlFor="password"> Password</label>
          <input
            type=""
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
          {errors.p1 ? (
            <p>{errors.p1}</p>
          ) : (<p>{errors.p2}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form