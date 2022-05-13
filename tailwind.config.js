const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'accent-1': 'var(--accent-1)',
                'accent-2': 'var(--accent-2)',
                'accent-3': 'var(--accent-3)',
                'accent-4': 'var(--accent-4)',
                'accent-5': 'var(--accent-5)',
                'accent-6': 'var(--accent-6)',
                'accent-7': 'var(--accent-7)',
                'accent-8': 'var(--accent-8)',
                secondary: 'var(--secondary)',
                'secondary-light': 'var(--secondary-light)',
                'secondary-dark': 'var(--secondary-dark)',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
