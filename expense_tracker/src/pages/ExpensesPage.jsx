import TopBar from "../components/TopBar";
const ExpensesPage = () => {
    return (
        <div>
            <div>
                <h2  className="text-lg font-semibold text-center" >Add New Expense Below</h2>
            </div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6">
                    <input type="hidden" />
                    <label for="description">Description</label>
                    <input type="text" required />

                    <label for="amount">Amount</label>
                    <input type="number" required />

                    <label for="date">Due Date</label>
                    <input type="date" required />

                    <input id="submit" type="submit" value="Submit"/>
                </form>
                
            </div>
        </div>
        
    )   
}

export default ExpensesPage;