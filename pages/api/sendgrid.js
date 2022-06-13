import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: 'hey@seankerwin.dev', // Your email where you'll receive emails
            from: 'contact@seankerwin.dev', // your website email address here
            subject: `${req.body.subject}`,
            html: `
                <strong>Name:</strong><br>${req.body.fullname}<br /><br />
                <strong>Email:</strong><br>${req.body.email}<br /><br />
                <strong>Message:</strong><br>${req.body.message}
            `,
        })
    } catch (error) {
        console.log(error)
        return res.status(error.statusCode || 500).json({ error: error.message })
    }

    return res.status(200).json({ error: '' })
}

export default sendEmail
