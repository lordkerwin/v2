import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { navLinks } from 'config'
import useScrollDirection from 'hooks'
import Link from 'next/link'

const Menu = () => {
    const [isMounted, setIsMounted] = useState(false)
    const scrollDirection = useScrollDirection('down')
    const [scrolledToTop, setScrolledToTop] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 100)

        const handleScroll = () => {
            setScrolledToTop(window.scrollY < 100)
            console.log(scrolledToTop)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolledToTop])

    return (
        <div
            className={cn('menu', {
                'scrolling-up': scrollDirection === 'up' && !scrolledToTop,
                'scrolling-down': scrollDirection === 'down' && !scrolledToTop,
            })}
        >
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <a className={cn('hidden md:inline-block')}>
                            <span>Logo</span>
                        </a>
                    </Link>
                    <nav className="flex gap-x-8">
                        {navLinks.map((link) => (
                            <Link href={link.href} key={link.href}>
                                <a className={cn('hidden md:inline-block')}>
                                    <span>{link.name}</span>
                                </a>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Menu
