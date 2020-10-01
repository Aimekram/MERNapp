import React from "react";

const NewStudent = () => {
    const handleSubmit = async e => {
        if (!e.target.checkValidity()) { return };

        const data = new FormData(e.target);
        const body = {};
        data.forEach((value, property) => body[property] = value);

        console.log(`body: ${JSON.stringify(body)}`)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        
        try {
            const response = await fetch("http://localhost:4000/api/students", requestOptions);
            if(!response.ok) { throw new Error("Server error") }
            setDataSent('success');
        } catch(error) {
            setDataSent('error');
            console.error(error);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="John" 
                    required 
                    maxLength="50"
                    pattern="^[A-Za-z ]+\S$"
                    title="First name should consist of letters only"
                />

                <label htmlFor="lastName">Last name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Doe" 
                    required 
                    maxLength="50"
                    pattern="^[A-Za-z ]+\S$"
                    title="Last name should consist of letters only"
                />

                <label htmlFor="age">Age</label>
                <input 
                    type="number" 
                    name="age" 
                    placeholder="18" 
                    required 
                    maxLength="3"
                    min="0"
                    step="1"
                    title="Your age should be a number"
                />

                <label htmlFor="nationality">Nationality</label>
                <input 
                    type="text" 
                    name="nationality" 
                    placeholder="American" 
                    required 
                    maxLength="50"
                    pattern="^[A-Za-z ]+\S$"
                    title="Your nationality should consist of letters only"
                />
            </div>

            <button type="submit">Add new student</button>
        </form>
    );
}

export default NewStudent;