import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ExistingUser() {
    const location = useLocation();
    const { user } = location.state || {}; 

    const navigate = useNavigate();

    const numbers = user.numbers.slice(0, -1);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    let big;

    let message;

    const lastElement = user.numbers[user.numbers.length - 1];

    if (average > lastElement) {
        message = "The Average of your previous scores is greater than your current score."
        big = false;
    } else {
        message = "Good Going! Your current score is greater than the average of your previous scores."
        big = true;
    }

console.log(average);

    const onSubmit = async (e) => {
        e.preventDefault();
        navigate(`/`);
    };

    if (!user) {
        return <div className='container'>No user data available.</div>;
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h3 className='text-center m-4'>Hi {user.firstname}, Welcome Back!</h3>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>User Details</h4>
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <strong>First Name:</strong> {user.firstname}
                            </li>
                            <li className='list-group-item'>
                                <strong>Last Name:</strong> {user.lastname}
                            </li>
                            <li className='list-group-item'>
                                <strong>Date of Birth:</strong> {user.dob}
                            </li>
                            <li className='list-group-item'>
                                <strong>SSN:</strong> {user.ssn}
                            </li>
                            <li className='list-group-item'>
                                <strong>Recent Fico Score:</strong> {user.recentFicoScore}
                            </li>
                            <li className='list-group-item'>
                                <strong>Previous Fico Scores:</strong> {user.numbers.slice(0, -1).join(', ')}
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    {big ? (
            <b><i style={{ color: 'green' }}>{message}</i></b>
        ) : (
            <b><i style={{ color: 'red' }}>{message}</i></b>
        )}
                    <p></p>

                    <form onSubmit={onSubmit}>
                        <button type="submit" className="btn btn-danger btn-block">Check again</button>
                    </form>

                </div>
            </div>
        </div>
    );
}
