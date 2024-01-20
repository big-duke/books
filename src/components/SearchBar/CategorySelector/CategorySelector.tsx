import React from "react";
import "./styles.css";
type CategorySelectorProps = {
  options: string[];
};
export const CategorySelector: React.FC<CategorySelectorProps> = ({
  options,
}) => {
  return (
    <div className="category-container">
      <label>Categories</label>
      <select name="category" defaultValue={options[0] ?? ""}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
