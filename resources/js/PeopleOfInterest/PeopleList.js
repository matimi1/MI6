import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const PeopleList = ({ selected_status }) => {
    const [people, setPeople] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(
                "/api/people-of-interest/" + encodeURIComponent(selected_status)
            );
            // console.log(res);
            setPeople(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selected_status]);

    return people.map((person, i) => {
        return (
            <>
                <p key={i}>
                    {person.name} is {person.occupation}
                </p>
                <p>Known aliases:</p>
                <ul>
                    {person.aliases !== [] ? (
                        person.aliases.map((alias) => {
                            return <li key={alias.id}>{alias.alias}</li>;
                        })
                    ) : (
                        <p>Not found</p>
                    )}
                </ul>
            </>
        );
    });
};

export default PeopleList;
