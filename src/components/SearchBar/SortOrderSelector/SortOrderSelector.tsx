import React from "react";
import "./styles.css";
type SortOrderSelectorProps = {
  options: string[];
};
export const SortOrderSelector: React.FC<SortOrderSelectorProps> = ({
  options,
}) => {
  return (
    <div className="sort-container">
      <label>Sorting by</label>
      <select name="sortOrder" defaultValue={options[0] ?? ""}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
