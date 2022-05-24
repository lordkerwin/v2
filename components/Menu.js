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
                {/* Menu Button */}
                <button onClick={() => toggleMenu()} className="menu-btn">
                    <MenuAlt3Icon className={cn('w-8 h-8', { hide: open })} />
                    <XIcon className={cn('w-8 h-8', { hide: !open })} />
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
