import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import useDelayedRender from 'use-delayed-render'
import cn from 'classnames'
import Link from 'next/link'
import { navLinks } from 'config'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/solid'
import { CSSTransition } from 'react-transition-group'
import useOnClickOutside from 'hooks/useOnClickOutside'
import Head from 'next/head'
import { Transition } from '@headlessui/react'

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <Transition.Root show={open} as={Fragment}>
            <div>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-red-500 bg-opacity-50 transition-opacity"></div>
                </Transition.Child>
            </div>
        </Transition.Root>
    )
}

export default MobileNav
