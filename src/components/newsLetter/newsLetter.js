import React, { useState } from "react"

import { NewsLetterContainer } from "./newsLetter.styles"

const NewsLetter = () => {
  const [email, setEmail] = useState("")

  return (
    <NewsLetterContainer>
      <h3>news letter</h3>
      <form>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button>Subscribe</button>
      </form>
    </NewsLetterContainer>
  )
}

export default NewsLetter
