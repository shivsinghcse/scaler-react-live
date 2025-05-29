import React from 'react';

const AdvanceForm = () => {
    const [formData, setFormData] = React.useState({email: '', password: ''})

    const handler = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(`Email: ${formData.email}, Password: ${formData.password}`);

        setFormData({email: '', password: ''})
        
        
    }
    return(
        <>
            <form onSubmit={handler}>
                <div className="form">
                    
                    <input type='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder='xyz@gmail.com' required/>
                    <br />
                    <br />

                    <input type='password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder='********'
                    />
                    <br />
                    <br />

                    <button type='submit'>LogIn</button>
                </div>
            </form>
        </>
    )
}

export default AdvanceForm;