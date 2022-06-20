import axios from 'axios'
import React, { useState, useEffect } from 'react'
import InputGroup from '../components/InputGroup'
import { useNavigate, useParams } from "react-router-dom";


function Details() {
  const [form, setForm] = useState({})
  const {id} = useParams();
  const navigate = useNavigate();


  useEffect(()=>{
    async function fetchData(){
        await axios.get(`/api/books/${id}`)
        .then(res=>setForm(res.data)) 
    }
    fetchData();
},[])


const onSubmitHandler = (e)=>{
  e.preventDefault();
  axios.put(`/api/books/${id}`, form).then(
      res=>{
        navigate('/');
      }
      )
}

const onChangeHandler =(e)=>{
  setForm(
  {
      ...form,
      [e.target.name]:e.target.value
  })
}
  return (
    <div className="col-12 col-lg-4">
    <form onSubmit={onSubmitHandler}>
        <InputGroup label ='Title' name='Title' onChangeHandler={onChangeHandler} value={form.Title}  />
        <InputGroup label ='Author'name='Author' onChangeHandler={onChangeHandler} value={form.Author}  />
        <InputGroup label ='Type'  name='Type' onChangeHandler={onChangeHandler}  value={form.Type} />
        <InputGroup label ='Price' name='Price'onChangeHandler={onChangeHandler} value={form.Price}  />
        <button type='submit' className="btn btn-primary">Update book</button>
    </form>
</div>
  )
}

export default Details