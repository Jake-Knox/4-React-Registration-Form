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
        <div>
            <div>
                <h2>User Registration Form</h2>
                {isSubmitted ? (
                    <p>Registration successful! You can now log in.</p>
                ) : (
                    // onSubmit - errors shown to user when submitting/press enter
                    <form onSubmit={handleSubmit}>
                        {/* username */}
                        <div>
                            <label>Username:</label>
                            <input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <p className="error">{errors.username}</p>}
                        </div>
                        {/* email */}
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        {/* password */}
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        {/* confirm password */}
                        <div>
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        </div>

                        {/* submit btn */}
                        <button type="submit">Register</button>
                    </form>
                )}
            </div>

        </div>
    )
}

export default RegistrationForm