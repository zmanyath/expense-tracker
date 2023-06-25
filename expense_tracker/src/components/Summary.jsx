import FetchExpense from "./FetchExpense";

const Summary = ({expenses}) => {
    return (
        <div class="relative overflow-x-auto">
            <div class="expenseList">   
                <h2 class="text-lg font-semibold text-center">Expenses Summary</h2>

                <hr></hr>                

                <p id="no_expenses"  >You don't have any expenses!</p> 

                <h2 class="text-lg font-semibold text-center">Expenses</h2>
                <table class="w-full text-sm text-left text-gray-500 ">
                    
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                What
                            </th>
                            <th scope="col" class="px-6 py-3">
                                When
                            </th>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                How Much
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                    <th:block for>
                        <tr class="">
                            <th scope="row" class="px-6 py-3 font-medium whitespace-nowrap dark:text-white">
                                <a class="description">Lunch</a>
                            </th>
                            <td class="px-6 py-4">
                                2021/10/21
                            </td>

                            <td  class="px-6 py-4">200.00</td>
                        </tr>
                        </th:block>
                    </tbody>
                    <tfoot>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" class="px-6 py-3 text-base">Total</th>
                        <td class="px-6 py-4">200.00</td>
                        <td class="px-6 py-4">
                            <button class="bg-[#818cf8z`] hover:bg-primary-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                Add a new expense
                            </button></td>
                    </tr>
                    </tfoot>
                </table>
            </div>

            <div>
                <h2 class="text-lg font-semibold text-center">People You Owe</h2>
                <p id="owe_nobody" >You don't owe anyone!</p>

                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-l-lg">
                                Who
                            </th>
                            <th class="px-6 py-3">
                                What
                            </th>
                            <th class="px-6 py-3">
                                Due
                            </th>
                            <th class="px-6 py-3 rounded-l-lg">
                                How Much
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                     <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Sett
                        </th>
                        <td td class="px-6 py-4">
                            Lunch
                        </td>
                        <td td class="px-6 py-4">
                            2021/11/15
                        </td>
                        <td td class="px-6 py-4">
                            150.00
                        </td>
                    </tr>
                    </tbody>
                    
                    <tfoot>

                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" class="px-6 py-3 text-base">Total</th>
                        <td class="px-6 py-3">150.00</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <div class="font-semibold text-gray-900 dark:text-white" >
                <div class="px-6 py-3 right">
                    <h3>Total Expenses</h3>
                    <p>450.00</p>
                    </div>
            </div>
        </div>
        
    )   
}

export default Summary;