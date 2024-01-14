import React, { useState } from 'react';
import './RegistrationForm.css';  // Import the CSS file

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
        if (!username.trim()) validationErrors.username = 'Username is required';
        if (!email.trim()) validationErrors.email = 'Email is required';
        if (!password.trim()) validationErrors.password = 'Password is required';
        if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

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
        <div className="registration-container">
            <h2 className="form-title">User Registration Form</h2>
            {isSubmitted ? (
                <p className="success-message">Registration successful! You can now log in.</p>
            ) : (
                // onSubmit - errors shown to user when submitting/press enter
                <form onSubmit={handleSubmit} className="form">
                    {/* username */}
                    <div className='form-group'>
                        <label className='label'>Username:</label>
                        <input
                            type='text'
                            className='input-field'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    {/* email */}
                    <div className='form-group'>
                        <label className='label'>Email:</label>
                        <input
                            type="email"
                            className='input-field'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    {/* password */}
                    <div className='form-group'>
                        <label className='label'>Password:</label>
                        <input
                            type="password"
                            className='input-field'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    {/* confirm password */}
                    <div className='form-group'>
                        <label className='label'>Confirm Password:</label>
                        <input
                            type="password"
                            className='input-field'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>

                    {/* submit btn */}
                    <button type="submit" className='submit-button'>Register</button>
                </form>
            )}
        </div>
    )
}

export default RegistrationForm