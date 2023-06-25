import React from 'react'
import { getDate } from '../LocalStorage'


const FetchExpense= ({expense}) => {
  return (
    <>
      <td>{expense.description}</td>
      <td>{getDate(expense.createdAt)}</td>
    </>
  )
}

export default FetchExpense