import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import uuid from "react-uuid";
import "./App.css";
// const items = [
//   { id: uuid(), charge: "supermaket", amount: 1620 },
//   { id: uuid(), charge: "car payment", amount: 1100 },
//   { id: uuid(), charge: "bill", amount: 870 },
// ];

const items = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

const App = () => {
  const [bill, setBill] = useState(items);
  const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState("");
  const [edit, isEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const edited = bill.map((item) => {
          return item.id === id ? { ...item, amount, charge } : item;
        });
        setBill(edited);
        isEdit(false);
      } else {
        const newBill = { id: uuid(), amount: amount, charge: charge };
        setBill([...bill, newBill]);
      }
      setCharge("");
      setAmount("");
    }
  };
  const handleClear = () => {
    setBill([]);
  };

  const handleDelete = (id) => {
    const deleted = bill.filter((item) => item.id !== id);
    setBill(deleted);
  };
  const handleEdit = (id) => {
    const findItem = bill.find((item) => item.id === id);
    isEdit(true);
    setId(id);
    setAmount(findItem.amount);
    setCharge(findItem.charge);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(bill));
  });
  return (
    <>
      <div className="app-container">
        <h1>Costs List</h1>
        <section className="app">
          <Form
            charge={charge}
            amount={amount}
            handleCharge={handleCharge}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            edit={edit}
          />
          <List
            bill={bill}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </section>
        <div className="clear-bt">
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="total-cost">
          total cost:
          <span>
            {bill.reduce((acc, curr) => {
              return (acc += parseInt(curr.amount));
            }, 0)}
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
