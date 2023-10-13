import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './main.css';
import swal from 'sweetalert';

function Addsubcategory() {
  const [data, setdata] = useState({});
  const [name, setName] = useState([]);
 

  useEffect(() => {
    axios.get('https://productlisting-rpw9.onrender.com/save/view-category')
      .then((res) => {
        console.log("res", res);
        setName(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const SetDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
    console.log(data);
  };

  
  



    const validate = (event) => {
     
      console.log("datas", data);
      axios.post("https://productlisting-rpw9.onrender.com/save/subcategory", data).then((res) => {
        console.log("res", res);
        event.preventDefault()
        swal("added");
     
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
                <h3 className='text-center'>Add SubCategory </h3>
              </label>

              <div className="mt-3 ">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Select category
                  </label>
                  <select

                    type="text"
                    name="category"
                    className="form-control"
                    id="exampleInputPassword1"
                   onChange={SetDetails}
                   
                  >
                    <option value="">categories</option>

                    {name.map((cat, key) => (
                      <option value={cat.category}>{cat.category}</option>
                    ))}
                  </select>
                </div>
            <br></br>
              <input
                onChange={SetDetails}
                name="subcategory"
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

export default Addsubcategory
