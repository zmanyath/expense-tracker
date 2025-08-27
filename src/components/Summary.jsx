import React, { useEffect } from "react";

const ExpenseModal = ({
  isOpen,
  onClose,
  onSubmit,
  description,
  setDescription,
  amount,
  setAmount,
  date,
  setDate,
  editId,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2
          id="modal-title"
          className="text-xl font-semibold text-center mb-4"
        >
          {editId ? "Update Expense" : "Add New Expense"}
        </h2>
        <hr className="mb-4" />

        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-gray-900"
            >
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

          {/* Amount */}
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block mb-2 font-medium text-gray-900"
            >
              Amount
            </label>
            <input
              id="amount"
              className="text-gray-900 rounded-lg block w-full p-2.5 border border-gray-300 focus:outline-none focus:border-blue-600"
              type="number"
              min="0"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
            />
          </div>

          {/* Date */}
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block mb-2 font-medium text-gray-900"
            >
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

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              className="bg-[#7e22ce] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-white text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
              type="submit"
            >
              {editId ? "Update Expense" : "Submit"}
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;
