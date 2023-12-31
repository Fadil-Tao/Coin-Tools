import { useEffect, useState } from 'react';
type DebouncedEffectProps = {
    value?: number | string ;
    onChange: string | any;
    debounce?: number;
    [key: string]: any;
};

const DebouncedInput = ({
    value: initValue,
    onChange,
    debounce = 500,
    ...props
}: DebouncedEffectProps) => {
    const [value, setValue] = useState(initValue);
    useEffect(() => {
        setValue(initValue);
    }, [initValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);

    return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default DebouncedInput;
