import React, { useEffect, useState } from "react";

import css from '../css/Post.css';

function EditPost() {

    const id = localStorage.getItem('edit-id') || '';

    const [notice, setNotice] = useState({});

    const url = 'https://mock-11-9zkx.onrender.com';

    useEffect(() => {
        console.log(id)
        fetch(`${url}/notice/${id}`)
            .then((res) => res.json())
            .then((data) => setNotice(data))
            .catch((err) => alert(err.message))
    }, [])

    function handleSubmit(event) {

        event.preventDefault();
        const payload = {
            name: event.target.name.value || notice.name,
            title: event.target.title.value || notice.title,
            description: event.target.desc.value || notice.description
        }
        fetch(`${url}/notice/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(() => alert('Post Edited Sucessfully'))
            .catch((err) => alert(err.message))
    }

    return (
        <>
            <div id="form_div">
                <h1>Edit Notice</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder={notice.name} />
                    <input type="text" id="title" placeholder={notice.title} />
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder={notice.description} ></textarea>
                    <input type="submit" value="Submit" />
                </form>
                <a href="./view"><button>Cancel</button></a>
            </div>

        </>

    )
}

export default EditPost;