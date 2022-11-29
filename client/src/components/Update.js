import axios from 'axios';
import React, { useEffect ,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const UpdateAndDElete = () => {
    
    const id=useParams().id;
    console.log(id);
    const history=useNavigate();
  const [inputs,setInputs]=useState();
  const[checked,setChecked]=useState(false)
  
  useEffect(()=>{
        
    const fetchHandler =async()=>{
       await axios.get(`http://localhost:5000/books/${id}`).then((res)=>res.data).then((data)=>setInputs(data.book));
    }
    fetchHandler();

},[id])
  
const sendData = async() =>{
    await axios.put(`http://localhost:5000/books/${id}`,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      available:Boolean(checked),
      image:String(inputs.image),
    }).then((res)=>res.data)
  }  
  const handleInputs=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    sendData().then(()=>history('/books'));
   } 
    

  return (
    <div className="container">
      {inputs && <form onSubmit={handleSubmit}>
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
      </form>}
    </div>
  )
}

export default UpdateAndDElete
