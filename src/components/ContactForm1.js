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

    // const sendingThisData = {
    //     first: formData.first,
    //     last: formData.last,
    //     email: formData.email,
    //     funFact:formData.funFact
    // }


    // fetch('https//:URLetcetc', {
    //     method: "POST",
    //     headers: {"Content-Type":"application/json"},
    //     body:JSON.stringify(sendingThisData)
    // })
    // .then(r => {
    //     if(r.ok) {
    //         r.json().then((r => {
    //             console.log(r)

    //             console.log("submitted yay")
    //             setFormData({
    //                 first: "",
    //                 last:"",
    //                 email:"",
    //                 funFact:""
    //             })

    //         }))
    //     }
    // })




    console.log("submitted yay")




    setFormData({
        first: "",
        last:"",
        email:"",
        funFact:""
    })
}

console.log(formData)



    return (
        <div className="formComponent">
            <form
            onSubmit={handleSubmit} >
                <div className="form1label">First Name</div>
                <input type="text" onChange={handleFormData} id="first" value={formData.first} />
                <div className="form1label">Last Name</div>
                <input type="text" onChange={handleFormData} id="last" value={formData.last}/>
                <div className="form1label">Email</div>
                <input type="text" onChange={handleFormData} id="email" value={formData.email}/>
                <div className="form1label">Tell us a fun fact about you!</div>
                <textarea type="text" onChange={handleFormData} id="funFact" value={formData.funFact} />
                <input type="submit"/>
            </form>
        </div>
    )
};