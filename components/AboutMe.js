import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import image from '../public/static/me.webp'

const AboutMe = () => {
    return (
        <div id="about" className="fp-section">
            <div className="about-me pt-16 sm:pt-0">
                <div className="text">
                    <p className="text-4xl font-extrabold text-white w-full sm:mb-6">Hey 👋</p>
                    <p className="text-2xl">
                        My name is <span className="accent">Sean Kerwin</span> and I&apos;m a self-taught front-end web
                        developer and designer based in <span className="accent">Wiltshire, England</span>.
                    </p>
                    <p>I have a passion for creating beautiful, functional and accessible websites.</p>
                    <p>
                        I&apos;ve been playing around with web technologies since 2005, tinkering with MySpace themes.
                        Ever since then I&apos;ve been building websites and progressing my skills and knowledge as a
                        web developer.
                    </p>
                    <p>Here are some of the technologies I&apos;ve been working with recently:</p>
                    <ul className="skills">
                        <li>
                            <span>JavaScript</span>
                        </li>
                        <li>
                            <span>React</span>
                        </li>
                        <li>
                            <span>Vue</span>
                        </li>
                        <li>
                            <span>Next.js</span>
                        </li>
                        <li>
                            <span>Nuxt.js</span>
                        </li>
                        <li>
                            <span>Laravel</span>
                        </li>
                        <li>
                            <span>Nest.js</span>
                        </li>
                        <li>
                            <span>Flutter</span>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <Image src={image} alt="Me" width={385} height={385} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
