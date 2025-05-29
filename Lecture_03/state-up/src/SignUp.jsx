import React from 'react';

const SignUp = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

     const handleSubmit = (e) => {
            e.preventDefault();
            // alert("Submittted")

            // printing the value
            console.log(`Name: ${name}, Email: ${email}, Password: ${password}`)

            // reset the form
            setName('');
            setEmail('');
            setPassword('');

            // name = '' WRONG. ( UI will not re-render )
        }

    return(
       
        <>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} placeholder='username' />
                    <br />
                    <br />
                    <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='example@gmail.com' />
                    <br />
                    <br />

                    <input type="password" 
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    name="password"placeholder='********' />
                    <br />
                    <br />
                    <button type='submit'>SignUp</button>
                </div>
            </form>
        </>
    )
}

export default SignUp;