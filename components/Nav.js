import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { navLinks } from 'config'
import useScrollDirection from 'hooks/useScrollDirection'
import Link from 'next/link'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Menu from '@/components/Menu'

const Nav = () => {
    const [mounted, setMounted] = useState(false)
    const scrollDirection = useScrollDirection('down')
    const [scrolledTop, setScrolledTop] = useState(true)

    const handleScroll = () => {
        setScrolledTop(window.pageYOffset < 50)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMounted(true)
        }, 100)

        window.addEventListener('scroll', handleScroll)

        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={cn('header', {
                'scrolling-down': !scrolledTop && scrollDirection === 'down',
                'scrolling-up': !scrolledTop && scrollDirection === 'up',
            })}
        >
            <nav className="container">
                <TransitionGroup component={null}>
                    {mounted && (
                        <CSSTransition classNames={'fadedown'} timeout={1000}>
                            <Link href="/">
                                <a className="font-medium text-white text-xl">Sean Kerwin</a>
                            </Link>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <div className="links">
                    <ol>
                        <TransitionGroup component={null}>
                            {mounted &&
                                navLinks.map(({ href, name }, i) => (
                                    <CSSTransition key={name} classNames={'fadedown'} timeout={1000}>
                                        <li
                                            className={cn({ active: scrolledTop })}
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                        >
                                            <Link href={href}>
                                                <a>{name}</a>
                                            </Link>
                                        </li>
                                    </CSSTransition>
                                ))}
                        </TransitionGroup>
                    </ol>
                </div>

                <TransitionGroup component={null}>
                    {mounted && (
                        <CSSTransition classNames={'fadedown'} timeout={1000}>
                            <Menu />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </nav>
        </header>
    )
}

export default Nav
