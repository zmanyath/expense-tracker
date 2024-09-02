import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Summary = () => {
  const [expenseList, setExpensesList] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [editId, setEditId] = useState(null);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenseList));
  }, [expenseList]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEditId(null);
    setDescription('');
    setAmount('');
    setDate('');
  };

  const onButtonClick = (e) => {
    e.preventDefault();

    newExpense({ description, amount, date });
    toggleModal();
  };

  const newExpense = (addExpense) => {
    if (editId) {
      const updatedExpense = expenseList.map((ex) =>
        ex.id === editId ? { ...addExpense, id: editId } : ex
      );
      setExpensesList(updatedExpense);
      setEditId(null);
      Swal.fire({
        title: 'Expense Updated',
        text: 'Your expense has been successfully updated.',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setExpensesList([...expenseList, { ...addExpense, id: Date.now() }]);
      Swal.fire({
        title: 'Expense Added',
        text: 'Your expense has been successfully added.',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const handleEdit = (expense) => {
    setEditId(expense.id);
    setDescription(expense.description);
    setAmount(expense.amount);
    setDate(expense.date);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredExpenses = expenseList.filter((ex) => ex.id !== id);
    setExpensesList(filteredExpenses);
    Swal.fire({
      title: 'Expense Deleted',
      text: 'Your expense has been successfully deleted',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(amount);
  };

  return (
    <div className="relative overflow-x-auto">
      <div className="expenseList">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Expenses Summary</h2>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            onClick={toggleModal}
          >
            Add Expense
          </button>
        </div>
        <hr className="mb-4"/>
        {expenseList.length === 0 ? (
          <p className="text-center text-gray-500">No expenses added yet.</p>
        ) : (
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">What</th>
                <th scope="col" className="px-6 py-3">When</th>
                <th scope="col" className="px-6 py-3">How Much</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenseList.map((ex) => (
                <tr key={ex.id}>
                  <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
                    {ex.description}
                  </th>
                  <td className="px-6 py-4">{ex.date}</td>
                  <td className="px-6 py-4">{formatCurrency(ex.amount)}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleEdit(ex)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(ex.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-center mb-4">
              {editId ? 'Update Expense' : 'Add New Expense'}
            </h2>
            <hr className="mb-4"/>
            <form className="space-y-6" onSubmit={onButtonClick}>
              <div className="mb-6">
                <label htmlFor="description" className="block mb-2 font-medium text-gray-900">
                  Description
                </label>
                <input
                  id="description"
                  className="text-gray-900 rounded-lg block w-full p-2.5 border border-gray-300 focus:outline-none focus:border-blue-600"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="amount" className="block mb-2 font-medium text-gray-900">
                  Amount
                </label>
                <input
                  id="amount"
                  className="text-gray-900 rounded-lg block w-full p-2.5 border border-gray-300 focus:outline-none focus:border-blue-600"
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="date" className="block mb-2 font-medium text-gray-900">
                  Date
                </label>
                <input
                  id="date"
                  className="text-gray-900 rounded-lg block w-full p-2.5 border border-gray-300 focus:outline-none focus:border-blue-600"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                    className="bg-[#7e22ce] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-white  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
                    type="submit"
                >
                    {editId ? 'Update Expense' : 'Submit'}
                </button>
                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  onClick={toggleModal}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
