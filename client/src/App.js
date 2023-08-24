import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => setData(data.message));
    }, []);

    return (
        <div>
            <header>
                <h1>{!data ? "Loading..." : data}</h1>
            </header>
        </div>
    )
}

export default App