import React from 'react';
import './FeedbackForm.css';
import validator from 'validator';
import { useState } from 'react';
import Rating from 'react-rating';
import { useEffect } from 'react';

const FeedbackForm = () => {
    const [user, setUser] = useState({});
    const [country, setCountry] = useState([]);
    const [invalid, setInvalid] = useState(false);
    const [rate, setRate] = useState(0);
    const [search, setSearch] = useState('');
    let warning = {
        color:'black'
    }

    useEffect(()=> {
        fetch('https://mocki.io/v1/9cf14ccb-b3f0-4c08-bf8f-85fead339e6f')
        .then(res => res.json())
        .then(country => setCountry(country))
    },[])
    
    const setUserData = e =>{
        const keyfield = e.target.name;
        const value = e.target.value;
        if(keyfield === 'email'){
            validator.isEmail(value)?setInvalid(false):setInvalid(true)
        }
        if(keyfield === 'number'){
            validator.isInt(value)?setInvalid(false):setInvalid(true)
        }
        if(!invalid){
            const newdata = {...user};
            newdata[keyfield] = value;
            if(rate){
                newdata['ratings'] = rate;
            }
            setUser(newdata);
        }
    }

    if(invalid){
        warning = {
            color:'black',
            boxShadow: 'rgb(255 0 0) 0px 0px 20px 1px'
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(user)
    }


    return (
        <div className="feedback_form">
            <div className="feedback_form_sub">
                <form onSubmit={handleSubmit}>
                    <div className="main_form">
                        <h5>Thank you so much for taking the time</h5>
                        <p>please provide the details below</p>
                        <p>First Name:</p>
                        <input name="first-name" onBlur={setUserData} className="form_input" type="text" placeholder="Your First Name" />
                        <p>Last Name:</p>
                        <input name="last-name" onBlur={setUserData} className="form_input" type="text" placeholder="Your Last Name" />
                        <p>Address:</p>
                        <input name="address" onBlur={setUserData} className="form_input_address" type="text" />
                        <p>Country:</p>
                        <div className='dropdown'>
                        <input name="country dropbtn" onChange={ e => setSearch(e.target.value)} onBlur={setUserData} style={{width:'300px'}} className="form_input" type="text" placeholder="Country" />
                            <div className="dropdown-content">
                            {
                                country.filter((val) => {
                                    if(val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                        return val;
                                    }
                                }).slice(0, 4).map(data => {return<p>{data.name}</p>})
                            }
                            </div>
                        </div>
                        <p>Email ID:</p>
                        <div className="input_flexer">
                            <input name="email" style={warning} onBlur={setUserData} className="form_input" type="text" />
                            <p className="pcolor"> Please enter a valid E-mail id</p>
                        </div>
                        <p>Phone Number</p>
                        <div className="input_flexer">
                            <input onBlur={setUserData} style={{width:'50px'}} className="form_input" type="text" />
                            <input name="number" onBlur={setUserData} style={{...warning,width:'150px'}} className="form_input" type="text" />
                            <p className="pcolor"> Please enter a valid number</p>
                        </div>
                        <Rating
                            style={{color:'#ffb100'}}
                            initialRating={rate}
                            fullSymbol="fas fa-star"
                            emptySymbol="far fa-star"
                            onChange={(event) => {
                                setRate(event);
                              }
                            }
                            >
                        </Rating>
                        <button type="submit" className="formsubmit_button"><b>Submit Feedback</b></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;