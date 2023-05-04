import React from "react";
import Header from "./Header";
import Form from "./Form";
import axios from "axios";

const FormContainer = () => {
  const submitFormData = (form) => {
    const userData = {
      id: form.id,
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    axios
      .post(
        "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
        userData
      )
      .then((response) => {
        console.log(response.status, response.data.token);
      });
  };

  return (
    <div className="form-container">
      <Header />
      <Form submitForm={submitFormData} />
    </div>
  );
};

export default FormContainer;
