// contact form with just React, no libraries

import { useState } from "react";

export const ContactForm1 = () => {

const newData = {
    first: "",
    last:"",
    email:"",
    funFact:""
}

const [ formData, setFormData ] = useState(newData)

const handleFormData = (e) => {
    setFormData({
        ...formData,
        [e.target.id]:e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted yay")
}




    return (
        <div className="formComponent">
            <form
            onSubmit={handleSubmit} >
                <div className="form1label">First Name</div>
                <input type="text" onChange={handleFormData} name="first" />
                <div className="form1label">Last Name</div>
                <input type="text" onChange={handleFormData} name="last"/>
                <div className="form1label">Email</div>
                <input type="text" onChange={handleFormData} name="email"/>
                <div className="form1label">Tell us a fun fact about you!</div>
                <textarea type="text" onChange={handleFormData} name="funFact"/>
                <input type="submit"/>
            </form>
        </div>
    )
};