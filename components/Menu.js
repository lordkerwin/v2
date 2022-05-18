import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { navLinks } from 'config'
import useScrollDirection from 'hooks'
import Link from 'next/link'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames={'fadedown'} timeout={0}>
                                <Link href="/">
                                    <a className={cn('hidden md:inline-block')}>
                                        <span>Logo</span>
                                    </a>
                                </Link>
                            </CSSTransition>
                        )}
                    </TransitionGroup>

                    <nav className="flex">
                        <ol className="flex gap-x-4">
                            <TransitionGroup component={null}>
                                {isMounted &&
                                    navLinks &&
                                    navLinks.map((link, i) => (
                                        <CSSTransition key={link.href} classNames={'fadedown'} timeout={0}>
                                            <li style={{ transitionDelay: `${(i + 1) * 75}ms` }}>
                                                <Link href={link.href} key={link.href}>
                                                    <a className={cn('block p-2 rounded-lg hover:text-violet-500')}>
                                                        <span>{link.name}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        </CSSTransition>
                                    ))}
                            </TransitionGroup>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Menu
