export const wait = () => new Promise(res => setTimeout(
    res, Math.random() * 800
))

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const createExpense = ({
    description, amount
}) => {
    const newExpense = {
        id: crypto.randomUUID(),
        description: description,
        createAt: Date.now(),
        amount: +amount,
    }
    const setExpenses = fetchData("expenses") ?? []
    return localStorage.setItem("expenses",
    JSON.stringify([...setExpenses, newExpense]))
}

export const getDate = (epoch) => {
new Date(epoch).toLocaleString();
}

export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0,
    })
}


export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}
