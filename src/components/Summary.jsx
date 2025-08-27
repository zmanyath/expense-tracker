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
          <div>
      <button
        onClick={() => isModalOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
      >
        Open dialog
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Deactivate account
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Summary;
