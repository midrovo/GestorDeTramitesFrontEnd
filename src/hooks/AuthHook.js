import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthHook = (initialState) => {
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState(initialState);
    const [err, setError] = useState(null);

    const handleChange = (e) => {
        if(err !== null) {
            setError(null)
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/login",
                {
                    username: formData.username,
                    password: formData.password
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            
            navigate("/home", {
                state: response.data
            })

        } catch (error) {
            setError(error.response.data.message);
            console.error('Error:', error.response.data);    
        }

        resetForm();      

    }

    const resetForm = () => {
        setFormData(initialState);
    
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        err,
    }
  
}

export default AuthHook;