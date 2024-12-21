import iconError from '../images/icon-error.svg'
import { useState } from 'react'
import './Singup.css'

export default function Singup(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false
    })

    const [errorMessages, setErrorMessages] = useState({
        firstName: 'First Name cannot be empty',
        lastName: 'Last Name cannot be empty',
        email: 'Email cannot be empty',
        password: 'Password cannot be empty'
    })

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        setErrors(prev => ({
            ...prev,
            [name]: false
        }))
    }

    const validar = (e) => {
        e.preventDefault()
        const newErrors = {}
        const newErrorMessages = {...errorMessages}
        
        Object.keys(formData).forEach(key => {
            if (formData[key].trim() === '') {
                newErrors[key] = true
                newErrorMessages[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`
            }
        })

        if (formData.email && !validateEmail(formData.email)) {
            newErrors.email = true
            newErrorMessages.email = 'Looks like this is not an email'
        }
        
        setErrors(newErrors)
        setErrorMessages(newErrorMessages)
    }

    return(
        <>
        <section className="conteinerSingup">
            <div className="input-container">
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''} 
                />
                {errors.firstName && (
                    <>
                        <img src={iconError} alt="error" className="error-icon" />
                        <p className="error-message">{errorMessages.firstName}</p>
                    </>
                )}
            </div>

            <div className="input-container">
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''} 
                />
                {errors.lastName && (
                    <>
                        <img src={iconError} alt="error" className="error-icon" />
                        <p className="error-message">{errorMessages.lastName}</p>
                    </>
                )}
            </div>

            <div className="input-container">
                <input 
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''} 
                />
                {errors.email && (
                    <>
                        <img src={iconError} alt="error" className="error-icon" />
                        <p className="error-message">{errorMessages.email}</p>
                    </>
                )}
            </div>

            <div className="input-container">
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''} 
                />
                {errors.password && (
                    <>
                        <img src={iconError} alt="error" className="error-icon" />
                        <p className="error-message">{errorMessages.password}</p>
                    </>
                )}
            </div>

            <button onClick={validar}>Claim your free trial</button>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </section>
        </>
    )
}