import React , { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

    const[user, setUser] = useState({
        firstname:"",
        lastname:"",
        dob:"",
        ssn:""
    });

    const{firstname, lastname, dob, ssn}=user;

    const navigate = useNavigate();

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await axios.post("http://pnc-loadbalancer-1563452997.us-east-1.elb.amazonaws.com:80/user", user);
    
            const userDeets = await axios.get(`http://pnc-loadbalancer-1563452997.us-east-1.elb.amazonaws.com:80/user/${ssn}`);
    
            if (userDeets.data.numbers.length === 1) {
                navigate(`/newuser`, { state: { user: userDeets.data } });
            } else {
                navigate(`/existinguser`, { state: { user: userDeets.data } });
            }
        } catch (error) {
            console.error("There was an error with the submission:", error);
    
            alert("An error occurred while processing your request. Please try again later.");
        }
    };
    
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 border rounded p-5 shadow-lg bg-white">
                    <h3 className="text-center mb-4" style={{ color: 'black' }}>Check Your FICO Score</h3>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group mb-3">
                            <label htmlFor="firstname" className="form-label text-start d-block">
                                <b style={{ color: 'black' }}>First Name</b>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your first name"
                                name="firstname"
                                pattern="[A-Za-z]+"
                                title="First name should only contain alphabets."
                                value={firstname}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="lastname" className="form-label text-start d-block">
                                <b style={{ color: 'black' }}>Last Name</b>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your last name"
                                name="lastname"
                                pattern="[A-Za-z]+"
                                title="Last name should only contain alphabets."
                                value={lastname}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="dob" className="form-label text-start d-block">
                                <b style={{ color: 'black' }}>Date of Birth</b>
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                name="dob"
                                max={new Date().toISOString().split("T")[0]}
                                title="Date of birth cannot be in the future."
                                value={dob}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="ssn" className="form-label text-start d-block">
                                <b style={{ color: 'black' }}>SSN</b>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your SSN"
                                name="ssn"
                                pattern="\d{9}"
                                inputMode="numeric"
                                title="SSN must be a 9-digit number."
                                maxLength="9"
                                value={ssn}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-dark btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}
