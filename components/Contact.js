import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import { MailIcon } from '@heroicons/react/outline'
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
                <div className="sm:mt-6">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-gray-50">Let&apos;s work together </h3>
                            <p>
                                I&apos;m always looking for new opportunities to help. If you have a project in mind, or
                                you just want to chat, I&apos;m always open to discussing it.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-gray-50">Contact Info</h3>
                            <a href="mailto:hey@seankerwin.dev" className="flex items-center gap-3">
                                <MailIcon className="w-5 h-5" />
                                <span className="text-gray-50">hey@seankerwin.dev</span>
                            </a>
                            <a
                                href="https://twitter.com/snwkrwn"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3"
                            >
                                <svg
                                    role="img"
                                    className="w-5 h-5 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                <span className="text-gray-50">@snwkrwn</span>
                            </a>
                            <a
                                href="https://dev.to/seankerwin/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3"
                            >
                                <svg
                                    role="img"
                                    className="w-5 h-5 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                                </svg>
                                <span className="text-gray-50">dev.to/seankerwin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
