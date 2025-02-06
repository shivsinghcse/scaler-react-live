import { useState } from 'react';

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}`);

        setName('');
        setEmail('');
    };
    return (
        <>
            <h1>User Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input
                        type="text"
                        value={name}
                        id="name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        id="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input type="submit" value="Done" />
                </div>
            </form>
        </>
    );
}

export default UserForm;
