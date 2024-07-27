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
        <div>
            <form
            onSubmit={handleSubmit}>
                <input type="text" onChange={handleFormData} />
                <input type="text" onChange={handleFormData}/>
                <input type="text" onChange={handleFormData}/>
                <input type="submit"/>
            </form>
        </div>
    )
};