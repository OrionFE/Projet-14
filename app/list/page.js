"use client";
import DataTableEmployee from "@/components/DataTableEmployee";

const ListPage = () => {
  const employees = JSON.parse(window.localStorage.getItem("employee"));

  return (
    <div className="my-5">
      {employees ? (
        <DataTableEmployee employees={employees} />
      ) : (
        <p className="text-xl text-center font-semibold p-5">
          0 employee created
        </p>
      )}
    </div>
  );
};

export default ListPage;
