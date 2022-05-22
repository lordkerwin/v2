import React, { useState, useEffect, useRef } from 'react'
import cn from 'classnames'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'
import { navLinks } from 'config'
import Link from 'next/link'

const Menu = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)

    const buttonRef = useRef(null)
    const navRef = useRef(null)
    const wrapperRef = useRef()

    const onResize = (e) => {
        if (e.currentTarget.innerWidth > 768) {
            setOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)

        if (open) {
            document.body.classList.add('menu-open')
        } else {
            document.body.classList.remove('menu-open')
        }

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [open])

    return (
        <div className="mobile-menu">
            <div ref={wrapperRef} className="flex">
                <button onClick={() => toggleMenu()} className="menu-btn">
                    <svg
                        width="300"
                        height="300"
                        viewBox="0 0 32 42"
                        xmlns="http://www.w3.org/2000/svg"
                        className={cn({ active: open })}
                    >
                        <g transform="matrix(1,0,0,1,-389.5,-264.004)">
                            <g id="arrow_left2">
                                <g transform="matrix(1,0,0,1,0,5)">
                                    <path
                                        id="top"
                                        d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                                    />
                                </g>
                                <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
                                    <path
                                        id="bottom"
                                        d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                                    />
                                </g>
                                <path id="middle" d="M390,284.967L420,284.967" />
                            </g>
                        </g>
                    </svg>
                </button>
                <aside className={cn('sidebar', { open: open })}>
                    <nav ref={navRef}>
                        <ol>
                            {navLinks.map(({ href, name }, i) => (
                                <li key={name}>
                                    <Link href={href}>
                                        <a onClick={() => setOpen(false)}>{name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default Menu
