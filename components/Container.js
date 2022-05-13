import Head from 'next/head'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileNav from '@/components/MobileNav'

const NavItem = ({ href, text }) => {
    const router = useRouter()
    const isActive = router.asPath === href
    return (
        <Link href={href}>
            <a className={cn(isActive && 'text-secondary', 'hidden md:inline-block')}>
                <span>{text}</span>
            </a>
        </Link>
    )
}

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
            <div className="container">
                <div className="flex justify-between items-center mt-6 mb-12">
                    <nav className="flex gap-x-6 items-center">
                        <MobileNav />
                        <NavItem href="/" text="Home" />
                        <NavItem href="/projects" text="Projects" />
                        <NavItem href="/blog" text="Blog" />
                        <NavItem href="/contact" text="Contact" />
                    </nav>
                    <div className="mt-0.5 h-5 w-10">
                        <ThemeSwitch />
                    </div>
                </div>
                <main className="flex flex-col">{children}</main>
                <footer className="mt-12 mb-10 border-t border-accent-2 pt-10">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center text-sm">
                            <span>
                                Designed &amp; Built with <span className="text-secondary">&hearts;</span> by Sean
                                Kerwin
                            </span>
                            <span className="">
                                &copy; <span className="text-xs">{new Date().getFullYear()}</span>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Container
