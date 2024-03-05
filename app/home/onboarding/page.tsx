// Import necessary hooks and components from React and Next.js
"use client"
import React, { useState } from 'react';
import Head from 'next/head';

const OnboardingPage: React.FC = () => {
    // State for storing form inputs
    const [name, setName] = useState('');
    const [idNumber, setIdNumber] = useState('');

    // Handler for name input changes
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    // Handler for ID number input changes
    const handleIdNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdNumber(event.target.value);
    };

    // Handler for form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add form submission logic here
    };

    return (
        <div>
            {/* Next.js Head component for setting the page title */}
            <Head>
                <title>Onboarding Form</title>
            </Head>

            <div>
                <h1>Onboarding Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />

                    <label htmlFor="idNumber">ID Number:</label>
                    <input type="text" id="idNumber" value={idNumber} onChange={handleIdNumberChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default OnboardingPage;
