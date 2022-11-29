import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Add = () => {
  const history=useNavigate();
  const [inputs,setInputs]=useState({
    name:"",
    author:"",
    description:"",
    price:"",
    image:"",
  });
  const[checked,setChecked]=useState(false)
  const handleInputs=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const sendData = async() =>{
    const url="http://localhost:5000/books";
    await axios.post(url,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      available:Boolean(checked),
      image:String(inputs.image),
    }).then((res)=>res.data)
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      sendData().then(()=>history('/books'));
  } 

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="mb-3 mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={inputs.name}
            onChange={handleInputs}
            
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="author"
            value={inputs.author}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="description"
            value={inputs.description}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            name="price"
            value={inputs.price}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="image"
            value={inputs.image}
            onChange={handleInputs}
          />
        </div>
        <div className="form-check mb-3 mx-5">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
            checked={checked}
            onChange={()=>setChecked(!checked)}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Available
          </label>
        </div>
        <button type="submit" className="btn btn-primary mx-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
