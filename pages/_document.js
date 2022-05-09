import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=optional" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=optional" />
            </Head>
            <body className="scroll-smooth">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
