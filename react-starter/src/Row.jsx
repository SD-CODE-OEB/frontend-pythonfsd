import React from "react";

const Row = ({ rowKey, rowValue }) => {
  return (
    <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
      <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">
        {rowKey}
      </span>
      <span className="text-sm font-medium text-gray-800">
        {rowValue || "N/A"}
      </span>
    </div>
  );
};

export default Row;
