import React, { Component } from "react";
import ExpensesForm from "../expenses_form/ExpensesForm";
import classes from './NewExpenses.module.css'

class NewExpenses extends Component {
  render() {
    return (
      <>
        <div className={classes.new_expense}>
          <ExpensesForm />
        </div>
      </>
    );
  }
}

export default NewExpenses;
