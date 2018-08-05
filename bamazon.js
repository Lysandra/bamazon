//Initializes the npm packages for application.
var mysql = require("mysql");
var Table = require("cli-table");
var inquirer = require("inquirer");

//Initializes the MySQL connection to the database.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(" ");
  console.log(" ");
  displayProducts();
});

//Function to display the products table from the database and print results to the console.
function displayProducts() {
  //Selects all data from the MySQL bamazon database in the products table.
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    //Creates table with below columns and format to properly display the product data.
    var table = new Table({
      head: ["Item ID", "Product", "Price", "Quantity"],
      colWidths: [10, 60, 10, 10]
    });
    //Loops through the database result to display all products.
    for (var i = 0; i < res.length; i++) {
      table.push([
        res[i].id,
        res[i].product_name,
        res[i].price,
        res[i].stock_quantity
      ]);
    }

    console.log("Welcome to Bamzaon!");
    console.log(table.toString());

    //Function to prompt user for product choice.
    promptforOrder();
  });
}

//Function to prompt user with product choice.
function promptforOrder() {
  inquirer
    .prompt({
      name: "choice",
      type: "input",
      message: "Enter the ID of the product you would like to order?"
    })
    .then(function(answer) {
    //   console.log(answer.choice);
      connection.query(
        "SELECT * FROM products WHERE ?",
        { id: answer.choice },
        function(err, res) {
          //console.log(res);
          if (!res.length) {
            console.log("We don't carry that Product ID. Please make another selection.");
            console.log(" ");
            displayProducts();
          } else {
            inquirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "How many would you like to order?"
              })
              .then(function(answer) {
                if (answer.quantity <= res[0].stock_quantity) {
                  var newQuantity = res[0].stock_quantity - answer.quantity;
                  var totalCost = res[0].price * answer.quantity;
                //   console.log(newQuantity);
                  connection.query(
                    "UPDATE products SET stock_quantity=? WHERE id=?",
                    [
                      {
                        stock_quantity: newQuantity
                      },
                      {
                        id: answer.choice
                      }
                    ],
                    function(err, res) {
                      console.log("Thank you for your order!");
                      console.log("Your total cost is $" + totalCost + ".");
                      console.log(" ");
                      console.log(" ");
                      displayProducts();
                    }
                  );
                } else {
                  console.log(
                    "This item is currently out-of-stock. Please make another suggestion."
                  );
                  console.log(" ");
                  console.log(" ");
                  displayProducts();
                }
              });
          }
        }
      );
    });
}
