import React, { useEffect } from 'react';

function GetData() {
    const [data, setData] = React.useState(null);
    // using state management, manage
    // error, loading and success states

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        // complete the code here
        // call the fetch data function when the
        // page loads

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        if (!response.ok) {
            return <h2>Error fetching data</h2>;
        }
        const json = await response.json();
        setData(json);
    }

    // Here is the basic data boilerplate
    return data ? (
        <>
            {/* do not edit the code below this line */}
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Username: {data.username}</h2>
        </>
    ) : (
        <h2>Loading data…</h2>
    );
}

export default GetData;
