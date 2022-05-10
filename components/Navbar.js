import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    // state
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
            if (scrollPosition > 100) {
                document.body.classList.add('scrolled')
            } else {
                document.body.classList.remove('scrolled')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrollPosition])

    return (
        <div className="w-full bg-purple-800">
            <h1>aa</h1>
        </div>
    )
}

export default Navbar
