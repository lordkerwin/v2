import Image from 'next/image'
import React from 'react'
import testImage from '../public/static/test.webp'

const Services = () => {
    return (
        <div id="services" className="fp-section">
            <h2 className="section-title">Services</h2>

            <div className="grid grid-cols-1 gap-6 sm:gap-10">
                <div className="service">
                    <div className="text">
                        <div>
                            <h3>Pixel perfect</h3>
                            <h4>Website Design</h4>
                        </div>
                        <p>
                            Every website that I build is <span className="decorate">100% bespoke</span>, this means
                            that not only do the websites look amazing, but they are tailored to your individual needs,
                            making it a perfect fit. This also means they perform brilliantly and are{' '}
                            <span className="decorate">lightning fast</span>.
                        </p>
                    </div>
                    <div className="image">
                        <Image src={testImage} alt="Test" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="service">
                    <div className="text">
                        <div>
                            <h3>Outperform your competitors</h3>
                            <h4>Website Development</h4>
                        </div>
                        <p>
                            Writing scalable and highly efficient code is what I do best. I use modern technologies such
                            as <span className="decorate">Vue</span>, <span className="decorate">Nuxt</span>,{' '}
                            <span className="decorate">Next.js</span>, <span className="decorate">React</span>, and{' '}
                            <span className="decorate">Laravel</span> to build websites that are fast, performant and
                            easy to use, with me you can be happy knowing that your website is built to your needs.
                        </p>
                    </div>
                    <div className="image">
                        <Image src={testImage} alt="Test" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="service">
                    <div className="text">
                        <div>
                            <h3>Worry and hassle free</h3>
                            <h4>Maintenance</h4>
                        </div>
                        <p>
                            Keeping your website up and running is a big part of my job. I use the latest technologies
                            to ensure that your website is <span className="decorate">always</span> up and running. I
                            give you the <span className="decorate">peace of mind</span> that your website will always
                            be running smoothly, no need to worry about backups, updates or anything else.
                        </p>
                    </div>
                    <div className="image">
                        <Image src={testImage} alt="Test" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="service">
                    <div className="text">
                        <div>
                            <h3>Start selling online</h3>
                            <h4>eCommerce Development</h4>
                        </div>
                        <p>
                            I can help you build a custom eCommerce solution that will help you{' '}
                            <span className="decorate">sell your products online</span>. Weather you are a small
                            business or a large company, If you&apos;ve already got a website that you want to use as a
                            platform to sell your products, or you&apos;re just starting out selling online, I can help
                            you with that.
                        </p>
                    </div>
                    <div className="image">
                        <Image src={testImage} alt="Test" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
