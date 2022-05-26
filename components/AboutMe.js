import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import image from '../public/static/me.webp'

const AboutMe = () => {
    return (
        <div id="about" className="fp-section">
            <h2 className="text-3xl font-bold text-white pt-10">About me</h2>

            <div className="about-me mt-12">
                <div className="text">
                    <p>
                        Hey, my name is Sean and I&apos;m a software engineer based in Wiltshire, UK. I&apos;m a
                        self-taught front-end developer with a passion for creating beautiful, functional and accessible
                        websites.
                    </p>
                    <p>
                        I&apos;ve been playing around with web technologies since 2005, tinkering with MySpace theme.
                        Ever since then I&apos;ve been building websites and progressing my skills and knowledge as a
                        web developer.
                    </p>
                    <p>Here are some of the technologies I&apos;ve been working with recently:</p>
                    <ul className="skills">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Next.js</li>
                        <li>Nuxt.js</li>
                        <li>Laravel</li>
                        <li>Nest.js</li>
                        <li>Flutter</li>
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
