import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function HomeBg() {

  const [name, setName] = useState([])
 
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [forcat, setForcat] = useState([]);
  const [forsubcat, setForsubcat] = useState([]);
  const [data, setdata] = useState();

  useEffect(() => {
    axios.get('https://productlisting-rpw9.onrender.com/save/view-category')

      .then((res) => {
        console.log("res", res);
        setName(res.data.data)
      })
      .catch((err) => {
        console.log("error", err);
      })
  }, [])


  const forcatdis = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForcat({ ...forcat, [name]: value });
   
    setdata({ ...data, [name]: value });
  };

  useEffect((e) => {
    if (forcat.category) {
      // axios.get(`https://productlisting-rpw9.onrender.com/view-subcategory/${forcat.category}`)
      axios.get('https://productlisting-rpw9.onrender.com/save/view-subcategory')
      
        .then((res) => {
          console.log("res", res);
          setSubcategories(res.data.data);
         
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, [forcat.category]);


  const forsubcatdis = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForsubcat({ ...forsubcat, [name]: value });
   
    setdata({ ...data, [name]: value });
  };

  useEffect((e) => {
    if (forsubcat.subcategory) {
      axios.get(`https://productlisting-rpw9.onrender.com/save/view-products/${forsubcat.subcategory}`)
        .then((res) => {
          console.log("res", res);
          setProducts(res.data.data);
         
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, [forsubcat.subcategory]);


  const setDetails= (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
   

  };


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="div1">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand ps-4" href="#">
                  <h1>Electronics</h1>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item ps-5">
                      <a className="nav-link active ml-5 ms-5" aria-current="page" href="/">
                        Home
                      </a>
                    </li>


                    <li className="nav-item dropdown ps-5 ms-5">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                       Add Category
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          
                          <Link to={"/addcategory"} className="dropdown-item" >
                            Addcategory
                            </Link>
                        </li>
                        <li>
                          <Link  to={"/addsubcategory"}  className="dropdown-item" >
                            Add subcategory
                          </Link>
                        </li>

                      </ul>
                    </li>

                    <li className="nav-item dropdown ps-5 ms-5">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                      Add Products
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <Link to = {"/addproducts"} className="dropdown-item" >
                            Add products
                          </Link>
                        </li>
                        {/* <li>
                          <a className="dropdown-item" href="/">
                            View products
                          </a>
                        </li> */}

                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-6">

            <h1></h1>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="container-fluid">
        <div className="row ">
          <div className="d-flex">
            <div className="mt-3 ps-5">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Select Category
              </label>
              <select

                type="text"
                name="category"
                className="form-control bg-secondary text-light text-center"
                id="exampleInputPassword1"
                onChange={(setDetails,forcatdis)}
              >
                <option value="">Categories</option>

                {name.map((cat, key) => (
                  <option value={name.category}>{cat.category}</option>
                ))}
              </select>
            </div>
            <div className="mt-3 ps-5">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Select subcategory
              </label>
              <select

                type="text"
                name="subcategory"
                className="form-control bg-secondary text-light text-center "
                id="exampleInputPassword1"
                onChange={(setDetails,forsubcatdis)}
              >
                <option value="">Subcategories</option>

                {subcategories.map((subcat, key) => (
                      <option value={subcat.subcategory}>{subcat.subcategory}</option>
                    ))}
              </select>
            </div>
            <div className="mt-3 ps-5">
              <label htmlFor="exampleInputPassword1" className="form-label">
               Your products
              </label>
              <select

                type="text"
                name="product"
                className="form-control bg-secondary text-light text-center "
                id="exampleInputPassword1"
                onChange={setDetails}
              >
                <option value="">products</option>
                {products.map((prod, key) => (
                      <option value={prod.product}>{prod.product}</option>
                    ))}
               
              </select>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBg;
