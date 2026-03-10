import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MOCK_EXPENSES } from './expenses-mock';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class ExpensesComponent implements OnInit {
  totalExpenses: number = 0;
  compliantExpenses: number = 0;
  nonCompliantExpenses: number = 0;
  expenseList: Expense[] = MOCK_EXPENSES;

  constructor() { }

  ngOnInit() { this.calculateTotal(); }

  calculateTotal() {
    this.totalExpenses = this.expenseList.reduce((total, expense) => total + expense.amount, 0);
    this.compliantExpenses = this.expenseList.filter(expense => expense.complianceStatus === 'valid').reduce((total, expense) => total + (expense.complianceStatus == 'valid' ? 1 : 0), 0);
    this.nonCompliantExpenses = this.expenseList.filter(expense => expense.complianceStatus === 'invalid').reduce((total, expense) => total + (expense.complianceStatus == 'invalid' ? 1 : 0), 0);
  }

  addExpense() {
    // Logic to add a new expense (e.g., open a modal or navigate to a form)
  }

}
