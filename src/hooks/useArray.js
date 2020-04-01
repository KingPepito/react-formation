import {useState} from "react";
import {map, filter} from "lodash"

export const useArray = (initial = []) => {
    const [value, setValue] = useState(initial)

    return {
        value,
        setValue,
        add: newEl => setValue(currentValue => [...currentValue, newEl]),
        replaceByIdAndValue: (id, newValue) => setValue(currentValue => map(currentValue, v => v && v.id !== id ? v : newValue)),
        remove: (id) => setValue(currentValue => filter(currentValue, v => v.id !== id))
    }
}