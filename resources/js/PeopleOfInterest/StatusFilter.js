import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const StatusFilter = ({ selected_status, setSelected_status }) => {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        try {
            const res = await axios.get("/api/statuses");
            // console.log(res.data);
            setStatuses(res.data);
        } catch (error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        setSelected_status(e.target.getAttribute("data-status"));
    };

    useEffect(() => {
        loadStatuses();
    }, []);

    return (
        <div className={"status-filter__status"}>
            {statuses.map((status) => {
                return (
                    <button
                        className={
                            "status-filter__status" +
                            (selected_status == status.id ? "-selected" : "")
                        }
                        data-status={status.id}
                        key={status.id}
                        onClick={(e) => {
                            handleClick(e);
                        }}
                    >
                        {status.name}
                    </button>
                );
            })}
        </div>
    );
};

export default StatusFilter;
