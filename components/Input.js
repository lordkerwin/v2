import { ExclamationCircleIcon } from '@heroicons/react/solid'

const Input = ({ label, value, onChange, error }) => {
    return (
        <div>
            <label htmlFor={label} className="capitalize">
                {label}
            </label>
            <div className="mt-1 relative rounded-md shadow">
                <input
                    type="text"
                    className={error ? 'hasError' : ''}
                    name={label}
                    id={label}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                />
                {error && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>
                )}
            </div>
            <div className="mt-2 text-sm">{error ? <p className="text-red-500">{error}</p> : <p>&nbsp;</p>}</div>
        </div>
    )
}

export default Input
