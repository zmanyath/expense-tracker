import TopBar from "../components/TopBar";
const ExpensesPage = () => {
    return (
        <div>
            <div>
                <h2  class="text-lg font-semibold text-center" >Add New Expense Below</h2>
            </div>
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6">
                    <input type="hidden" />
                    <label for="description">Description</label>
                    <input name="description" id="description" type="text" th:value="{expense.description}" autofocus required />

                    <label for="amount">Amount</label>
                    <input name="amount" id="amount" type="number" th:value="${expense.amount}" required />

                    <label for="date">Due Date</label>
                    <input name="date" id="date" type="date" th:value="${expense.date}" required />

                    <input id="submit" type="submit" value="Submit"/>
                </form>
                
            </div>
        </div>
        
    )   
}

export default ExpensesPage;