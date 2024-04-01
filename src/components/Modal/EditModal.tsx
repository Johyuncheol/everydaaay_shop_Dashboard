import React from "react";
import FormHeader from "../Form/Header";
import ReusableForm from "../Form/FormArea";

interface ReusableFormProps<T> {
  initialData: T;
  onSubmit: (data: T) => void;
  close: () => void;
  title: string;
}

const EditModal = <T extends {}>({
  initialData,
  onSubmit,
  close,
  title,
}: ReusableFormProps<T>) => {
  return (
    <div className="fixed top-0 left-0 z-[99] bg-zinc-800/90  w-screen h-full flex justify-center items-center">
      <div className=" w-[80%] h-[80%] max-w-[800px] bg-white overflow-auto">
        <div className="flex justify-end">
          <button onClick={close}>닫기</button>
        </div>
        <FormHeader title={title} description={`${title} 할 정보를 입력하세요`}>
          <ReusableForm
            initialData={initialData}
            onSubmit={onSubmit}
            cancel={close}
          />
        </FormHeader>
      </div>
    </div>
  );
};

export default EditModal;
