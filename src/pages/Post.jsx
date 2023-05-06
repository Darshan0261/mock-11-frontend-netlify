import React from "react";

import css from '../css/Post.css';

function NoticePost() {

    const url = 'https://mock-11-9zkx.onrender.com'

    function handleSubmit(event) {

        event.preventDefault();
        const payload = {
            name: event.target.name.value,
            title: event.target.title.value,
            description: event.target.desc.value
        }
        fetch(`${url}/notice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((data) => alert(data.message))
            .catch((err => alert(err.message)))
    }

    return (
        <>
            <div id="form_div">
                <h1>Post Notice</h1>
                <form action=""  onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder="Author Name" />
                    <input type="text" id="title" placeholder="Notice Title" />
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Notice Description"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>

    )
}

export default NoticePost;