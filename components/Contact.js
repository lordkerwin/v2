import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [fullName, setFullName] = useState('bob')
    const [email, setEmail] = useState('foo@bar.com')
    const [message, setMessage] = useState('hello there...')

    const submit = async () => {
        // e.preventDefault()
        const data = {
            fullName,
            email,
            message,
        }

        const res = await fetch('/api/sendgrid', {
            body: JSON.stringify({
                email: email,
                fullname: fullName,
                message: message,
                subject: 'Contact Form Submission',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })

        const { error } = await res.json()
        if (error) {
            console.log(error)
            return
        }
        console.log(fullName, email, message)
    }

    return (
        <div id="contact" className="fp-section">
            <h2 className="section-title">Contact</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, perferendis quo beatae inventore quibusdam
                architecto ducimus maiores eligendi sunt cumque, vel aliquam explicabo alias obcaecati molestiae. Id
                alias quae tempora!
            </p>
            <button onClick={() => submit()}>Click</button>
        </div>
    )
}

export default Contact
