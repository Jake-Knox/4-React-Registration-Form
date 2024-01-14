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
        const validationErrors = {};

        // If there are validation errors, set the errors state and prevent form submission
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If no validation errors, you can handle the form submission logic here
        // For now, let's just set the isSubmitted state to true and maybe add an alert.
        setIsSubmitted(true);
        alert("Form Submitted");
    };

    return (
        <div>
            <div>
                <h2>User Registration Form</h2>
                {isSubmitted ? (
                    <p>Registration successful! You can now log in.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* username */}
                        <div>
                            <label>Username:</label>
                            <input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <p className='error'>{errors.username}</p>}
                        </div>
                        {/* email */}



                        {/* password */}



                        {/* confirm password */}


                        {/* submit btn */}


                    </form>
                )}
            </div>

        </div>
    )
}

export default RegistrationForm