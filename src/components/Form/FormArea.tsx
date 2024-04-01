import React, { useState } from "react";

interface ReusableFormProps<T> {
  initialData: T;
  onSubmit: (data: T) => void;
  cancel: () => void;
}

const ReusableForm = <T extends {}>({
  initialData,
  onSubmit,
  cancel,
}: ReusableFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(initialData).map(([key, value]) => (
        <div key={key} className="grid grid-cols-[100px_1fr] grid-rows-2">
          <span>{key}: </span>
          <textarea
            className="border"
            name={key}
            value={formData[key as keyof T] as string}
            onChange={handleChange}
            placeholder={key === "_id" ? "_id는 자동 설정됩니다" : key}
          />
        </div>
      ))}
      <div className="flex justify-center gap-[5rem]">
        <button type="submit">Submit</button>
        <button onClick={cancel}>cancel</button>
      </div>
    </form>
  );
};

export default ReusableForm;
