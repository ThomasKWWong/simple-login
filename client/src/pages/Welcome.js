import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SDiv } from '../components/styles';


const Welcome = () => {
    const [username, setUsername] = useState('');

    //fetch username if exists
    // async function populateUsername(x) {
    //     setUsername(x);
    //     console.log(username);
    // };

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

                if (!data) {
                    sessionStorage.removeItem('token');
                    window.location.href = '/login'
                }
                else {
                    setUsername(data.username);
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
        <Header/>
        <SDiv>
        <h1>Welcome {username || "username not found"}</h1> <br/>
        <h2>Enjoy your stay</h2>
        </SDiv>
        <Footer/>
        </>
    )
}

export default Welcome;