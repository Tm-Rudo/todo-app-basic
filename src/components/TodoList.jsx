import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [lists, setLists] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [{ name: "ngủ" }, { name: "đi làm" }, { name: "đi học" }];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(lists));
  }, [lists]);
  // const [lists, setLists] = useState([
  //   { name: "ngủ" },
  //   { name: "đi làm" },
  //   { name: "đi học" },
  // ]);

  //lưu dữ liệu vô lS mỗi khi list thay đổi
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(lists));
  // }, [lists]);

  const [valuesInput, setValueInput] = useState("");
  console.log(valuesInput);

  //add
  const handleAdd = () => {
    setLists((prev) => [...prev, { name: valuesInput }]);
    setValueInput("");
  };

  //delete
  const handleDelete = (index) => {
    setLists((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <h1 className=" text-4xl font-bold text-gray-600 text-center mt-6">
        Todo List
      </h1>

      <div className="flex justify-center mt-6 space-x-2">
        <input
          type="text"
          value={valuesInput}
          onChange={(e) => setValueInput(e.target.value)}
          className="rounded-md border w-[300px] pl-2"
        />
        <button
          className="w-24 h-10 bg-blue-400 rounded-md border"
          onClick={handleAdd}
        >
          {" "}
          Add
        </button>
      </div>

      <div className=" mx-auto mt-3 bg-gray-200 rounded-md w-[405px] ml-[540px]">
        {lists.map((list, index) => (
          <div
            key={index}
            className="flex items-center rounded-md mt-3 w-[405px] bg-gray-300"
          >
            <h1 className="font-bold ml-2">{list.name}</h1>

            <div className="ml-auto mt-2 mb-3">
              {/* btn xoá */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
                onClick={() => handleDelete(index)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
