import { ChangeEvent, useState } from 'react';

export const UserForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleOnchange,
    formData,
  };
};
