/*Bamazon Application

X CREATE a MySQL Database called `bamazon`.

    X 1.  CREATE a Table inside of that database called `products`.
        The products table should have each of the following columns:

        * item_id (unique id for each product)
        * product_name (name of product)
        * department_name
        * price (cost to customer)
        * stock_quantity (how much of the product is available in stores)

        Populate this database with around 10 different products. (i.e. INSERT "mock" data rows into this table).

CREATE a Node application called `bamazonCustomer.js`. 

    X 1.  DISPLAY all of the items available for sale:

        *Inclulde id, name, and price of products for sale.

            FUNCTION that SELECTS all Items from the Products table.
                * CONNECT to MySQL database.
                * DISPLAY all items in the products table.
                * CREATE a table to DISPLAY the products nicely.

    X 2.  DISPLAY user with "Welcome to Bamazon!"
    
    3.  PROMPT user for product and quantitity:
        
            FUNCTION INQUIRER.PROMPT (promptforProduct) for user input; "What is the ID of the product you would like to buy?"
                * CREATE variable to store user input; var chosenID, parseInt required to match value of prodcut id.
                * IF user input equals item in the products table execute the FUNCTION INQUIRER.PROMPT (promptforQuantity) for "How many + product_name + would you like to order?
        >>>>>>> * ELSE IF user input does not equal item in the products table DISPLAY "That item in not in inventory. Please make another selection."
                * ELSE Include option to exit.
    
    4.  ORDER by Customer: 
    
        * Application should check if your store has enough of the product to meet the customer's request.
        * IF not, the app should prevent the order from going through.
            * ALERT `Insufficient quantity! Please make another selection.`
        * IF yes, the app should fulfill the customer's order.
            * UPDATE the SQL database to reflect the remaining quantity.
            * DISPLAY the customer's the total cost of their purchase.*/