import { useState } from 'react';
function ComplexFormData() {
    const [formData, setFormData] = useState({ firstname: '', email: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${formData.firstname}, Email: ${formData.email}`);
        // console.log(e.target.firstname.value);
        // console.log(formData);
    };

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData);
    };
    return (
        <>
            <h1>Complex User Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={formData.firstname}
                        name="firstname"
                        id="name"
                        onChange={handleChange}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        name="email"
                        id="email"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Done" />
                </div>
            </form>
        </>
    );
}

export default ComplexFormData;
