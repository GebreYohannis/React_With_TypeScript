import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
function ExpenseApp() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Utilities" },
    { id: 2, description: "abb", amount: 15, category: "Groceries" },
    { id: 3, description: "bbb", amount: 16, category: "Entertainment" },
    { id: 4, description: "ccc", amount: 49, category: "Utilities" },
    { id: 5, description: "ddd", amount: 13, category: "Groceries" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  const handleClick = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <h3 className="text-muted">Filter by</h3>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList onDelete={handleClick} expenses={visibleExpenses} />
    </div>
  );
}

export default ExpenseApp;
