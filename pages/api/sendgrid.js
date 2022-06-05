import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
    try {
        console.log('REQ.BODY', req.body)
        await sendgrid.send({
            to: 'swkerwin@icloud.com', // Your email where you'll receive emails
            from: 'howdy@seankerwin.dev', // your website email address here
            subject: `${req.body.subject}`,
            html: `<div>Contact form submission</div>`,
        })
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message })
    }

    return res.status(200).json({ error: '' })
}

export default sendEmail
