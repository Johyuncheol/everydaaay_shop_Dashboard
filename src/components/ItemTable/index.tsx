import Link from "next/link";
import React, { Children, useEffect, useState } from "react";
import EditModal from "../Modal/EditModal";
import useOpen from "@/hooks/useOpen";
import { updateMainUIAPI } from "@/api/Ui";
import { deleteMainUIAPI } from "@/api/Ui";

interface CarouselTableCardProps<T> {
  data: T[];
  columnLabels: string[];
  category: string;
  initialValue: T;
}
const ItemTable = <T extends Record<string, any>>({
  columnLabels,
  data,
  category,
  initialValue,
}: CarouselTableCardProps<T>) => {
  const [nowPageData, setNowPageData] = useState<T[]>([]);
  const nums = 6;
  const [pageNums, setPageNums] = useState<number[]>([]);
  const [nowPage, setNowPage] = useState(1);
  const [editState, setEditState] = useState("");

  useEffect(() => {
    setPageNums(
      Array.from(
        { length: Math.ceil(data.length / nums) },
        (_, index) => index + 1
      )
    );

    setNowPageData(data.slice(0, nums * nowPage));
  }, [data]);

  useEffect(() => {
    setNowPageData(data.slice(nums * (nowPage - 1), nums * nowPage));
    setCheckedItems({})
  }, [nowPage]);

  const [nowData, setNowData] = useState<T>(initialValue);

  const { open, handleClick } = useOpen(false);

  const [checkedItems, setCheckedItems] = useState<Record<number, string>>({});

  const HandleUpdateModal = (index: number) => {
    setEditState("수정");
    setNowData(data[index]);
    handleClick();
  };

  const HandleGenerateModal = () => {
    setEditState("추가");
    handleClick();
  };

  const handleSubmit = async (values: T) => {
    for (const key in values) {
      if (key !== "_id" && values[key] === "") {
        return false;
      }
    }
    await updateMainUIAPI(category, values);
  };

  const ChangeCheckBox = async (
    e: React.MouseEvent<HTMLInputElement>,
    index: number
  ) => {
    const isChecked: boolean = (e.target as HTMLInputElement).checked;
    const checkboxValue: string = (e.target as HTMLInputElement).value;

    if (isChecked) {
      setCheckedItems((prev) => ({ ...prev, ...{ [index]: checkboxValue } }));
    } else {
      setCheckedItems((prev) => {
        const newCheckedItems = { ...prev };
        delete newCheckedItems[index];
        return newCheckedItems;
      });
    }

    console.log(
      `Checkbox with value ${checkboxValue} is ${
        isChecked ? "checked" : "unchecked"
      }`
    );

    console.log(checkedItems);
  };

  const HandleDelete = async () => {
    const res = await deleteMainUIAPI(category, checkedItems);
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center pb-[1rem]">
        <span className="text-xs">테이블을 클릭하면 수정할 수 있습니다 </span>
        <div className="flex gap-[1rem]">
          <button
            className="border min-w-[3rem]"
            onClick={() => HandleGenerateModal()}
          >
            추가
          </button>
          <button
            className="border min-w-[3rem]"
            onClick={() => HandleDelete()}
          >
            삭제
          </button>
        </div>
      </div>

      <div className="overflow-auto ">
        {open && (
          <EditModal
            initialData={nowData}
            close={handleClick}
            onSubmit={handleSubmit}
            title={editState}
          />
        )}

        <table className="w-full text-xs xl:text-sm">
          <thead>
            <tr className="border">
              <th>
                <input type="checkbox" />
              </th>
              {columnLabels.map((item, index) => {
                return (
                  <th className="border" key={index}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {nowPageData?.map((item, dataIndex) => {
              return (
                <tr className="  border  text-center " key={dataIndex}>
                  <td className="p-[1rem] min-w-[8rem] max-w-[10rem] border overflow-hidden">
                    <input
                      type="checkbox"
                      value={item._id}
                      onClick={(e) => ChangeCheckBox(e, dataIndex)}
                    />
                  </td>

                  {columnLabels.map((label, index) => (
                    <td
                      key={index}
                      className="border p-[1rem] min-w-[8rem] max-w-[10rem] break-all overflow-hidden cursor-pointer"
                      onClick={() => HandleUpdateModal(dataIndex)}
                    >
                      {item[label]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-[1rem] pt-[2rem]">
        {pageNums.map((item, index) => {
          return (
            <div
              className="cursor-pointer border pl-[1rem] pr-[1rem]"
              onClick={() => setNowPage(item)}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemTable;
