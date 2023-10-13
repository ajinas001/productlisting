import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert'

function Addcategory() {
    const [data, setdata] = useState();

  const SetDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  console.log(data);
  const validate = (event) => {
   
    console.log("datas", data);
    axios.post("https://productlisting-rpw9.onrender.com/save/category", data).then((res) => {
      console.log("res", res);
      swal("added");
      event.preventDefault()
      
    });
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <form className="mt-2">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Add Category
              </label>
              <input
                onChange={SetDetails}
                name="category"
                placeholder="enter category name"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
             
            </div>
            <button
              type="submit"
              onClick={validate}
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  </>
  )
}

export default Addcategory
