import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


function AddProduct() {
  const [data, setdata] = useState();
  const [name, setName] = useState([]);
 
  const [forcat, setForcat] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

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

  const forcatdis = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForcat({ ...forcat, [name]: value });
    setdata({ ...data, [name]: value });
  };

  useEffect((e) => {
    if (forcat.category) {
      axios.post(`https://productlisting-rpw9.onrender.com/save/view-subcategory/${forcat.category}`)
        .then((res) => {
          console.log("res", res);
          setSubcategories(res.data.data);
         
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, [forcat.category]);





  const setDetails= (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
   

  };
  console.log("data",data,name,subcategories,forcat.category);
  const validate = (event) => {

    console.log("datas", data);
    axios.post("https://productlisting-rpw9.onrender.com/save/product", data,name,subcategories,forcat).then((res) => {
      console.log("res", res);
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
                  <h3 className='text-center'>Add Products </h3>
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
                   onChange={(setDetails,forcatdis)}
                   
                  >
                    <option value="">categories</option>

                    {name.map((cat, key) => (
                      <option value={name.category}>{cat.category}</option>
                    ))}
                  </select>
                </div>


                <div className="mt-3 ">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Select Subcategory
                  </label>
                  <select

                    type="text"
                    name="subcategory"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={setDetails}
                  >
                    <option value="">Subcategories</option>

                    {subcategories.map((subcat, key) => (
                      <option value={subcat.subcategory}>{subcat.subcategory}</option>
                    ))}
                  </select>
                </div>
                <br></br>
                <input
                  onChange={setDetails}
                  name="product"

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
  );
}

export default AddProduct;


