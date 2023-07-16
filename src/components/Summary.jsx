import { NavLink } from "react-router-dom";
import { useState } from "react";

const Summary = () => {

    const [expenseList, setExpensesList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
  
    const onButtonClick = (e) => {
      e.preventDefault();
      
      newExpense({description, amount, date})
      setDescription('');
      setAmount('');
      setDate('');
    };

    const newExpense = (addExpense) => {
        if (editId) {
        const updatedExpense = expenseList.map((ex) =>
            ex.id === editId ? { ...addExpense, id: editId } : ex
        );
        setExpensesList(updatedExpense);
        setEditId(null);
        } else {
        setExpensesList([...expenseList, { ...addExpense, id: Date.now() }]);
        }
    };
    return (
        <div className="relative overflow-x-auto">
            <div className="expenseList">   
                <h2 className="text-lg font-semibold text-center">Expenses Summary</h2>

                <hr></hr>          

                <h2 className="text-lg font-semibold text-center">Expenses</h2>
                <table className="w-full text-sm text-left text-gray-500 ">
                    
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                What
                            </th>
                            <th scope="col" className="px-6 py-3">
                                When
                            </th>
                            <th scope="col" className="px-6 py-3">
                                How Much
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody >
                        {expenseList.length > 0 && expenseList.map((ex) => (
                         <tr className="" key={ex.id}>
                                <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
                                    <a className="description">{ex.description}</a>
                                </th>
                                <td className="px-6 py-4">
                                    {ex.date}
                                </td>

                                <td className="px-6 py-4">{'R' + ex.amount}</td>
                            </tr>
                            ))}
                            
                    </tbody>
                </table>
            </div>
            
            <br />
            <div>
                <h2 className="text-lg font-semibold text-center" >Add New Expense Below</h2>
            </div>
            <hr></hr>
            <div className="p-4  bg-[#a78bfa] border border-[#a78bfa] rounded-lg shadow sm:p-6 md:p-8">
                <form className="space-y-6" onSubmit={onButtonClick}>
                    <div className='mb-6'>
                        <label className='block mb-2 font-medium text-gray-900 dark:text-black'>Description</label>
                        <input
                        className='text-gray-900 rounded-lg block w-full p-2.5'
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 font-medium text-gray-900 dark:text-black'>Amount</label>
                        <input
                        className='text-gray-900 rounded-lg block w-full p-2.5'
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        required
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-2 font-medium text-gray-900 dark:text-black'>Date</label>
                        <input
                        className='text-gray-900 rounded-lg block w-full p-2.5'
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        required
                        />
                    </div>

                    <button 
                    className='bg-[#7e22ce] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none '
                    type="submit" > Submit </button>
                   
                </form>
                
            </div>

        </div>
        
    )   
}

export default Summary;