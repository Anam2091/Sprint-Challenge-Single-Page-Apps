import React, { useState } from "react";
import { withFormik, Form} from "formik";


function App() {
  const [searchy, setSearchy] = useState('');
  return (
    <div>
    <Form>
    <label>

      Search: <input onChange={evt => setSearchy(evt.target.value)} type="text" name="search" />
       
    </label>
    <button>Submit!</button>
    </Form>

 </div>

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

})(App);
