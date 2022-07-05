import React from "react";
import StatusFilter from "./StatusFilter";
import PeopleList from "./PeopleList";
import { useState, useEffect } from "react";

export default function App() {
    const [selected_status, setSelected_status] = useState("");

    return (
        <div style={{ margin: "3em" }}>
            <h1>Welcome to People of Interest REACT side</h1>
            <StatusFilter
                selected_status={selected_status}
                setSelected_status={setSelected_status}
            />
            <PeopleList selected_status={selected_status} />
        </div>
    );
}
