import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import { RefreshIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'

const defaultErrors = {
    fullName: '',
    email: '',
    message: '',
}

const Contact = () => {
    const [fullName, setFullName] = useState({ value: '', dirty: false, error: defaultErrors.fullName })
    const [email, setEmail] = useState({ value: '', dirty: false, error: defaultErrors.email })
    const [message, setMessage] = useState({ value: '', dirty: false, error: defaultErrors.message })
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (!fullName.value && fullName.dirty) {
            setFullName({ ...fullName, dirty: false, error: 'Please enter your name' })
            setFormValid(false)
        }
        if (!email.value && email.dirty) {
            setEmail({ ...email, dirty: false, error: 'Please enter your email address' })
            setFormValid(false)
        }
        if (!message.value && message.dirty) {
            setMessage({ ...message, dirty: false, error: 'Please enter your message' })
            setFormValid(false)
        }

        if (fullName.value && email.value && message.value) {
            setFormValid(true)
        }
    }, [fullName, email, message])

    const resetForm = () => {
        setFullName({ value: '', dirty: false, error: defaultErrors.fullName })
        setEmail({ value: '', dirty: false, error: defaultErrors.email })
        setMessage({ value: '', dirty: false, error: defaultErrors.message })
        setFormValid(false)
    }

    const submit = async (e) => {
        e.preventDefault()
        if (sent) {
            return
        }
        setLoading(true)

        // send email
        await fetch('/api/sendgrid', {
            body: JSON.stringify({
                email: email.value,
                fullname: fullName.value,
                message: message.value,
                subject: 'Contact Form Submission',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }).then((res) => {
            if (res.status === 200) {
                setLoading(false)
                setSent(true)
                setTimeout(() => {
                    resetForm()
                    setSent(false)
                }, 5000)
            } else {
                setLoading(false)
            }
        })
    }

    const renderText = () => (sent ? 'Message Sent' : 'Send Message')

    return (
        <div id="contact" className="fp-section">
            <h2 className="section-title">Contact</h2>
            <div className="grid sm:grid-cols-3 gap-12 w-full">
                <div className="w-full sm:col-span-2">
                    <form className="" onSubmit={(e) => submit(e)}>
                        <Input
                            label="name"
                            value={fullName.value}
                            onChange={(val) => setFullName({ value: val, dirty: true })}
                            error={fullName.error}
                        />
                        <Input
                            label="email"
                            value={email.value}
                            onChange={(val) => setEmail({ value: val, dirty: true })}
                            error={email.error}
                        />
                        <Textarea
                            label="message"
                            value={message.value}
                            onChange={(val) => setMessage({ value: val, dirty: true })}
                            error={message.error}
                        />
                        <button type="submit" className={`submit ${sent ? 'sent' : ''}`} disabled={!formValid}>
                            {loading ? (
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                renderText()
                            )}
                        </button>
                    </form>
                </div>
                <div>
                    <h3>Let&apos;s work together </h3>
                    <p>
                        I&apos;m always looking for new opportunities to help. If you have a project in mind, or you
                        just want to chat, I&apos;m always open to discussing it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
