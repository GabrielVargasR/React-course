import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isInputting, setIsInputting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const newExpenseHandler = () => {
    setIsInputting(true);
  };

  const cancelNewExpenseHandler = () => {
    setIsInputting(false);
  };

  return (
    <div className="new-expense">
      {!isInputting && <button onClick={newExpenseHandler}>New Expense</button>}
      {isInputting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelNewExpenseHandler}/>}
    </div>
  );
};

export default NewExpense;
