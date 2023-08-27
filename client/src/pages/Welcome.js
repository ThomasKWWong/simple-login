import React, { useEffect } from "react";

const Welcome = () => {
    
    //confirm user is logged in
    useEffect(() => {
        async function fetchData() {
            const token = sessionStorage.getItem('token')
            if(token) {
                const response = await fetch("/api/token-confirmation", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token,
                    }),
                })

                const data = await response.json();
                console.log(data);

                if (!data) {
                    sessionStorage.removeItem('token');
                    window.location.href = '/login'
                }
            }
            else { //no token, not logged in
                window.location.href = '/login'
            }
        }
        fetchData();
    }, []);
    


    

    return (
        <>
        <h1>Welcome</h1> <br/>
        <h2>you have logged in successfully</h2>
        </>
    )
}

export default Welcome;