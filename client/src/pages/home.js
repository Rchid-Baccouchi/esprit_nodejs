import DetailsRow from '../components/DetailsRow'
import InputGroup from '../components/InputGroup'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Notif from '../components/Notif'

function Home() {
    const [books,setBooks] = useState([])
    const [form, setForm] = useState({})
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false)
    
    const onChangeHandler =(e)=>{
        setForm(
        {
            ...form,
            [e.target.name]:e.target.value
        })
    }
// add book

const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('/api/books', form).then(
        res=>{setMessage("Book successfully added");
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 4000);
        }
        )
}

    //find all books

    useEffect(()=>{
        async function fetchData(){
            await axios.get('/api/books')
            .then(res=>setBooks(res.data)) 
        }
        fetchData();
    })

    // delete book 
    const onDelete = (id__)=>{
        if(window.confirm("Are you sure you want to delete this book ?")){
          axios.delete(`/api/books/${id__}`).then
          (res=>{setMessage("Book successfully deleted");
          setShow(true)
          setTimeout(() => {
              setShow(false)
          }, 4000);
          })
        }
      }

    return (
        <div className="row p-4">
        <Notif message={message} show={show}/>
            <div className="mt-4">
                <h2>Books</h2>
            </div>
            <div className="col-12 col-lg-4">
                <form onSubmit={onSubmitHandler}>
                    <InputGroup label ='Title' name='Title' onChangeHandler={onChangeHandler}  />
                    <InputGroup label ='Author'name='Author' onChangeHandler={onChangeHandler}   />
                    <InputGroup label ='Type'  name='Type' onChangeHandler={onChangeHandler}   />
                    <InputGroup label ='Price' name='Price'onChangeHandler={onChangeHandler}   />
                    <button type='submit' className="btn btn-primary">Add book</button>
                </form>
            </div>
            <div className="col-12 col-lg-7">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Author</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(({Title,Author,Type,Price,_id})=>
                            (<DetailsRow Title={Title} 
                                Author={Author} 
                                Type={Type}
                                 Price={Price} 
                                 Id={_id} 
                                 onDelete={onDelete}/>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home