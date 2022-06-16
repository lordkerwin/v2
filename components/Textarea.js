const Textarea = ({ label, value, onChange, error }) => {
    return (
        <div>
            <label htmlFor={label} className="capitalize">
                {label}
            </label>
            <div className="mt-1">
                <textarea
                    rows={4}
                    name={label}
                    id={label}
                    className={error ? 'hasError' : ''}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                />
            </div>
            <div className="mt-2 text-sm">{error ? <p className="text-red-500">{error}</p> : <p>&nbsp;</p>}</div>
        </div>
    )
}

export default Textarea
