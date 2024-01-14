import React, { useState } from 'react';

const RegistrationForm = () => {
    // State variables for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State variables for form submission status
    const [isSubmitted, setIsSubmitted] = useState(false);

    // From validation state varibales
    const [errors, setErrors] = useState({});

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple form validation



        // If there are validation errors, set the errors state and prevent form submission



        // If no validation errors, you can handle the form submission logic here
        // For now, let's just set the isSubmitted state to true and maybe add an alert.
        setIsSubmitted(true);
        alert("Form Submitted");
    };

    return (
        <div>
            <h2>Registion Form</h2>

        </div>
    )
}

export default RegistrationForm