import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import api from '../components/api/index';

const SignUpForm = () => {
    const navigate = useNavigate();

    const form = useRef(null);
    const register = async(e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const {data} = await api.registerSubmit(formData);
        console.log(data.user);
        console.log("User account created successfully!");
        navigate('/login'); 
    }



    return (
        <div className="form-container">
            <form
                ref = {form}
                onSubmit={register}
            >
                <h1>Sign Up</h1>

                <div>
                    <input name="name" className="input-form" placeholder="Name" />
                    <input name="email" className="input-form" placeholder="Email" />
                    <input name="password" className="input-form" type="password" placeholder="Password" />
                    <button
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;
