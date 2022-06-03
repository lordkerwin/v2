import { CodeIcon, CogIcon, ColorSwatchIcon, ServerIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import React from 'react'

const Services = () => {
    return (
        <div id="services" className="fp-section">
            <h2 className="section-title">Services</h2>

            <div className="service-wrapper">
                <div className="service">
                    <div className="heading">
                        <div>
                            <ColorSwatchIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <div className="divider"></div>
                        <div className="text">
                            <h3>Website Design</h3>
                            <div className="subline">Pixel perfect</div>
                        </div>
                    </div>
                    <p>
                        Every website that I build is <span className="decorate">100% bespoke</span>, this means that
                        not only do the websites look amazing, but they are tailored to your individual needs, making it
                        a perfect fit. This also means they perform brilliantly and are{' '}
                        <span className="decorate">lightning fast</span>.
                    </p>
                </div>
                <div className="service">
                    <div className="heading">
                        <div>
                            <CodeIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <div className="divider"></div>
                        <div className="text">
                            <h3>Website Development</h3>
                            <div className="subline">Outperform your competitors</div>
                        </div>
                    </div>
                    <p>
                        Writing scalable and highly efficient code is what I do best. I use modern technologies such as{' '}
                        <span className="decorate">Vue</span>, <span className="decorate">Nuxt</span>,{' '}
                        <span className="decorate">Next.js</span>, <span className="decorate">React</span>, and{' '}
                        <span className="decorate">Laravel</span> to build websites that are fast, performant and easy
                        to use, with me you can be happy knowing that your website is built to your needs.
                    </p>
                </div>
                <div className="service">
                    <div className="heading">
                        <div>
                            <CogIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <div className="divider"></div>
                        <div className="text">
                            <h3>Maintenance</h3>
                            <div className="subline">Hassle free</div>
                        </div>
                    </div>
                    <p>
                        Keeping your website up and running is a big part of my job. I use the latest technologies to
                        ensure that your website is <span className="decorate">always</span> up and running. I give you
                        the <span className="decorate">peace of mind</span> that your website will always be running
                        smoothly, no need to worry about backups, updates or anything else.
                    </p>
                </div>
                <div className="service">
                    <div className="heading">
                        <div>
                            <ShoppingCartIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <div className="divider"></div>
                        <div className="text">
                            <h3>eCommerce</h3>
                            <div className="subline">Start selling online</div>
                        </div>
                    </div>
                    <p>
                        I can help you build a custom eCommerce solution that will help you{' '}
                        <span className="decorate">sell your products online</span>. Weather you are a small business or
                        a large company, If you&apos;ve already got a website that you want to use as a platform to sell
                        your products, or you&apos;re just starting out selling online, I can help you with that.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
