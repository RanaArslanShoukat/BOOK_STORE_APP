import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink , useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const history=useNavigate();
  const { _id,name, author, description, price,image } = props.book;
  const deleteHandler=async()=>{
     await axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data).then(()=>history("/books"))
  }
  return (
    <>
      <div className="card" style={{ width: "15rem" }}>
        <img src={image} className="card-img-top" style={{height:"12rem"}} alt={name} />
        <div className="card-body">
          <p className="card-title" style={{color: "rgba(0, 0, 0, 0.5)"}}>By {author}</p>
          <p className="card-title"><b>{name}</b></p>
          <p className="card-title"><b>Rs {price}</b></p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-end">
            <NavLink to={`/books/${_id}`} className="btn">
              <EditIcon/>
            </NavLink>
            <NavLink to="/" onClick={deleteHandler} className="btn">
              <DeleteIcon/>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
