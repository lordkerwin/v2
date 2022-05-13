import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    const handleChange = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }

    if (!mounted) return null

    return (
        <Switch
            checked={resolvedTheme === 'dark'}
            onChange={handleChange}
            className={cn(
                resolvedTheme === 'dark' ? 'bg-secondary' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
            )}
        >
            <span
                className={cn(
                    resolvedTheme === 'dark' ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                )}
            >
                <span
                    className={cn(
                        resolvedTheme === 'dark'
                            ? 'opacity-0 ease-out duration-100'
                            : 'opacity-100 ease-in duration-200',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                    )}
                    aria-hidden="true"
                >
                    {mounted && <SunIcon className="w-3 h-3 text-amber-500" />}
                </span>
                <span
                    className={cn(
                        resolvedTheme === 'dark'
                            ? 'opacity-100 ease-in duration-200'
                            : 'opacity-0 ease-out duration-100',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                    )}
                    aria-hidden="true"
                >
                    {mounted && <MoonIcon className="w-3 h-3 text-secondary" />}
                </span>
            </span>
        </Switch>
    )
}

export default ThemeSwitch
