'use client'

import { signIn } from 'next-auth/react'
import React, { useRef } from 'react'
import TextField from '../ui/TextField'

const LoginForm = () => {
  const userNameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userNameRef.current && passwordRef.current) {
      console.log(userNameRef.current.value)
      console.log(passwordRef.current.value)
      signIn('credentials', {
        username: userNameRef.current.value,
        password: passwordRef.current.value,
      })
    }
  }
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <TextField
          inputRef={userNameRef}
          label="User Name"
          type="username"
          name="username"
        />
        <TextField
          inputRef={passwordRef}
          label="Password"
          type="password"
          name="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default LoginForm
