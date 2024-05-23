import React, { useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import "./Menu.css"


const Reserve = () => {
    const initialValue ={
        name: "",
        surname:"",
        email:"",
        date:""
    };
    const [data, setData] = useState(initialValue);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const navigate = useNavigate();
    const validateForm = () => {
        if (data.name.length < 3) {
            setBtnDisabled(true);
        } else if (data.surname.length < 3){
            setBtnDisabled(true);
        } else if (data.date.toString() == ""){
            setBtnDisabled(true);
        } else if (data.email == ""){
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false);
        }
      };
    
     useEffect(() => {
       validateForm();
    }, [data]);
   
    const handleInputChange = (e) => {
    setData({
      ...data, 
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data))
    setData(initialValue);
    setTimeout(()=>{
      navigate("/menu");
    },2000);
    
  };

  return (
    <div className='form'>
         <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Insert your name"
        onChange={handleInputChange}
        value={data.name}
      />
        <input
        type="text"
        name="surname"
        id="surname"
        placeholder="Insert your surname"
        onChange={handleInputChange}
        value={data.surname}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Insert your email"
        onChange={handleInputChange}
        value={data.email}
      />
       <input
        type="datetime-local"
        name="date"
        id="date"
        placeholder="Insert your date"
        onChange={handleInputChange}
        value={data.date}
      />
      <input type="submit" value="Send" disabled={btnDisabled} />
    </form>
    </div>
  )
}

export default Reserve