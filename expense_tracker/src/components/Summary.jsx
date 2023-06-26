import { NavLink } from "react-router-dom";
import FetchExpense from "./FetchExpense";

const Summary = ({expenses}) => {
    return (
        <div className="relative overflow-x-auto">
            <div className="expenseList">   
                <h2 className="text-lg font-semibold text-center">Expenses Summary</h2>

                <hr></hr>                

                {/* <p id="no_expenses"  >You don't have any expenses!</p>  */}

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
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                How Much
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="">
                            <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
                                <a className="description">Groceries</a>
                            </th>
                            <td className="px-6 py-4">
                                2023/06/25
                            </td>

                            <td className="px-6 py-4">500.00</td>
                        </tr>
                        <tr className="">
                            <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
                                <a className="description">Rent</a>
                            </th>
                            <td className="px-6 py-4">
                                2023/06/22
                            </td>

                            <td className="px-6 py-4">
                                2000.00
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                    <tr className="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-4">2500.00</td>
                        <td className="px-6 py-4">
                            <NavLink to='/ExpensesPage' className="bg-[#818cf8z`] hover:bg-primary-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                Add a new expense
                            </NavLink></td>
                    </tr>
                    </tfoot>
                </table>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-center">People You Owe</h2>

                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                Who
                            </th>
                            <th className="px-6 py-3">
                                What
                            </th>
                            <th className="px-6 py-3">
                                Due
                            </th>
                            <th className="px-6 py-3 rounded-l-lg">
                                How Much
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                     <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Retahbile
                        </th>
                        <td className="px-6 py-4">
                            Lunch
                        </td>
                        <td className="px-6 py-4">
                            2023/06/10
                        </td>
                        <td className="px-6 py-4">
                            100.00
                        </td>
                    </tr>
                    </tbody>
                    
                    <tfoot>

                    <tr className="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-3">100.00</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <div className="font-semibold text-gray-900 dark:text-white" >
                <div className="px-6 py-3 right">
                    <h3>Total Expenses</h3>
                    <p>2600.00</p>
                    </div>
            </div>
        </div>
        
    )   
}

export default Summary;