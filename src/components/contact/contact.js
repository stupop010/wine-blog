import React from "react"

import useForm from "../../hooks/useForm"

import { ContactContainer, ContactBackground } from "./contact.styles"
import ContactPic from "../../images/contact_pic.jpg"

const Contact = () => {
  const { inputs, handleSubmit, handleInputChange } = useForm({
    name: "",
    email: "",
    message: "",
  })

  return (
    <ContactBackground style={{ backgroundImage: `url('${ContactPic}')` }}>
      <ContactContainer>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Message..."
              name="message"
              value={inputs.message}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">send</button>
        </form>
      </ContactContainer>
    </ContactBackground>
  )
}

export default Contact
