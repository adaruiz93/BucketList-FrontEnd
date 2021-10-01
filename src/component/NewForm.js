import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NewForm(props) {
    const [userInput, setUserInput] = useState({ name: "" })
    const onChange = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault(userInput)
        newBucket(userInput)
    }

    const newBucket = async (data) => {
        console.log('set bucket:', data);
        const OPTIONS = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const createBucket = await fetch("http://localhost:8080/blist", OPTIONS);
            const parsedBucket = await createBucket.json();
            console.log(parsedBucket);
            props.history.push('/blist')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={userInput.name} onChange={onChange}/>
                <input type="submit" value="Create" />
            </form>
            <Link to="/blist">Home</Link>
        </>
    )
}
