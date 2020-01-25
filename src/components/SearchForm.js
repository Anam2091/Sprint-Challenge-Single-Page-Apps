import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";


function search() {
  return (
    <Form>
    <label>
      Search:
      <Field type="text" name="search" />
    </label>
    <button>Submit!</button>
    </Form>
  );
}


export const SearchForm = withFormik({

  mapPropsToValues({ search }) {
    return {
      search: search || "",
    };
  },

  handleSubmit(values) {
    console.log(values)
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }

})(search);
