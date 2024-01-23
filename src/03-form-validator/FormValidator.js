import './styles.css'
import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [message, setMessage] = useState('')

    const findErrors = () => {
        const errors = []
        //const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/
        if (!email || !password || !passwordConfirm) {
            errors.push('All fields must be filled in')
        }
        //if (!email.match(emailRegex)) {
        if ([...email].filter(i => i === '@').length !== 1) {
            errors.push('An email must have exactly one @')
        }
        if (password.length < 8) {
            errors.push('Password must be longer or equal to eight characters')
        }
        if (password !== passwordConfirm) {
            errors.push('Passwords must match')
        }

        return errors
    }

  const handleSubmit = e => {
    e.preventDefault()

    const errors = findErrors()
    setMessage(errors.length ? errors.join(', ') : 'User created')

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <p className='result-message'>{message}</p>
      <input type='submit' value='Submit' />
    </form>
  )
}