import { ChangeEvent, useState } from 'react';

export default function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement> | string) {
    if (typeof e === 'string') {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
}
