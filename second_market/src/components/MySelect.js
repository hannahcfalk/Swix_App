import Select from "react-select";

export default function MySelect({ onChange, options, value, name, className = "" }) {
    const defaultValue = (options, value) => {
        return options ? options.find((option) => option.value === value) : "";
    };

    return (
        <div>
            <Select
                className={className}
                name={name}
                value={defaultValue(options, value)}
                onChange={(value) => {
                    onChange(value);
                }}
                options={options}
            />
        </div>
    );
}