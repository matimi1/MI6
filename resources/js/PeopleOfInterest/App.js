import React from "react";
import { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const res = await fetch("/api/people-of-interest");
        const parsedResponse = await res.json();
        setData(parsedResponse);
    };

    useEffect(fetchData, []);

    return data == null ? (
        <h1>Loading...</h1>
    ) : (
        <div className="welcome">
            <h1>Welcome to People of Interest REACT side</h1>
            {data.map((person, i) => {
                return (
                    <p key={i}>
                        {person.name} is {person.occupation}
                    </p>
                );
            })}
        </div>
    );
}
