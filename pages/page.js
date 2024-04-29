// Import Page.js library
import page from "page";

// Define a function to handle the homepage route
function homepage() {
  // Render the homepage content
  document.getElementById("app").innerHTML =
    "<h1>Welcome to Expense Tracker</h1>";
}

// Define a function to handle the expenses page route
function expensesPage() {
  // Render the expenses page content
  document.getElementById("app").innerHTML = "<h1>Expenses</h1>";
}

// Define a function to handle the add expense page route
function addExpensePage() {
  // Render the add expense page content
  document.getElementById("app").innerHTML = "<h1>Add Expense</h1>";
}

// Define routes
page("/", homepage); // Home page route
page("/expenses", expensesPage); // Expenses page route
page("/add", addExpensePage); // Add expense page route

// Start the router
page();
