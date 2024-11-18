const Dropdown = () => {
  return (
    <div>
      <select className="form-select mb-3" name="category" id="category">
        <option value="All categories">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilites</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Dropdown;
