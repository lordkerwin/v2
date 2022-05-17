import Menu from '@/components/Menu'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Container = (props) => {
    const { children, ...customMeta } = props

    const router = useRouter()

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
            <Menu />
            <div className="container">
                <main className="flex flex-col">{children}</main>
            </div>
        </div>
    )
}

export default Container
