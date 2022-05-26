import React, { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Container = (props) => {
    const router = useRouter()
    const isHome = router.asPath === '/'
    const [loading, setLoading] = useState(isHome)

    const { children, ...customMeta } = props

    useEffect(() => {
        if (loading) {
            return
        }

        if (router.asPath.includes('#')) {
            const id = location.hash.substring(1) // location.hash without the '#'
            setTimeout(() => {
                const el = document.getElementById(id)
                if (el) {
                    el.scrollIntoView()
                    el.focus()
                }
            }, 0)
        }
    }, [loading, router.asPath])

    const meta = {
        title: 'Sean Kerwin - Front End Developer',
        description: 'Front End Developer based in Wiltshire, UK',
        type: 'website',
        ...customMeta,
    }

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://seankerwin.dev${router.asPath}`} />
                <link rel="canonical" href={`https://seankerwin.dev${router.asPath}`} />
            </Head>
            <div className="flex flex-co min-h-screen">
                <Nav />
                <div className="container">
                    <main className="flex flex-col" id="content">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Container
