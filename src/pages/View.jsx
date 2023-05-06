import React, { useEffect, useState } from "react";

import EditPost from "./Edit";

import css from '../css/View.css'

function ViewNotice() {

    const url = 'https://mock-11-9zkx.onrender.com'
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch(`${url}/notice`)
            .then((res) => res.json())
            .then((data) => setNotices(data))
            .catch((err) => alert(err.message))
    }, [notices])


    function handleDelete(id) {
        fetch(`${url}/notice/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => alert(data.message))
            .catch((err) => alert(err.message))
    }

    return (
        <div id="notice_parent">
            {
                notices.map((ele) => {
                    return (
                        <div className="notice_card" key={ele._id}>
                            <p>Author Name: {ele.name}</p>
                            <p>Notice Title: {ele.title}</p>
                            <p>Notice Description: {ele.description}</p>
                            <p>Notice Post Date: {ele.date}</p>
                            <button onClick={(e) => handleDelete(ele._id, e)}>Delete</button>
                            <a href="./edit"><button onClick={(e) => {
                                localStorage.setItem('edit-id', ele._id)
                            }}>Edit</button></a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewNotice;