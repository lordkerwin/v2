import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useDelayedRender from 'use-delayed-render'
import cn from 'classnames'
import Link from 'next/link'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/solid'

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
        enterDelay: 20,
        exitDelay: 300,
    })

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
            document.body.style.overflow = ''
        } else {
            setIsMenuOpen(true)
            document.body.style.overflow = 'hidden'
        }
    }

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <>
            <button onClick={toggleMenu} className="burger visible md:hidden">
                <MenuAlt4Icon className="w-5 h-5" data-hide={isMenuOpen} />
                <XIcon className="w-5 h-5" data-hide={!isMenuOpen} />
            </button>
            {isMenuMounted && (
                <ul className={cn('mobile-menu', isMenuRendered && 'rendered')}>
                    <li style={{ transitionDelay: '150ms' }}>
                        <Link href="/">
                            <a className={cn('flex w-auto', router.asPath === '/' && 'text-secondary')}>Home</a>
                        </Link>
                    </li>
                    <li style={{ transitionDelay: '175ms' }}>
                        <Link href="/projects">
                            <a className={cn('flex w-auto', router.asPath === '/projects' && 'text-secondary')}>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li style={{ transitionDelay: '200ms' }}>
                        <Link href="/blog">
                            <a className={cn('flex w-auto', router.asPath === '/blog' && 'text-secondary')}>Blog</a>
                        </Link>
                    </li>
                    <li style={{ transitionDelay: '250ms' }}>
                        <Link href="/contact">
                            <a className={cn('flex w-auto', router.asPath === '/contact' && 'text-secondary')}>
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            )}
        </>
    )
}

export default MobileNav
