import { ReactNode, useState } from "react";


const useOpen = ( activeCondition: boolean) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return { handleClick, open };
};

export default useOpen;
