import {useState} from "react";
import {filter, map, reject} from "lodash";
// This hook, is providing use of an array with basic generic functionalities
export const useArray = initial => {
  const [value, setValue] = useState(initial)
  return {
    value,
    setValue,
    add: newEl => setValue(v => [...v, newEl]),
    clear: () => setValue(() => []),
    replaceByIdAndValue: (id, newValue) =>
      setValue(arr => map(arr, v => v && v.id !== id ? v : newValue)),
    removeById: id =>
      setValue(arr => filter(arr, v => v && v.id !== id)),
    removeIndex: index =>
      setValue(v => reject(v, (el, id) => id === index))
  }
}

export default useArray