    var customers = [];

    function saveCustomer() {
        // Get input values
        var name = document.getElementById("customerName").value;
        var address = document.getElementById("customerAddress").value;
        var salary = document.getElementById("customerSalary").value;

        // Create a new customer object
        var customer = {
            id: customers.length + 1,
            name: name,
            address: address,
            salary: salary
        };

        // Add the customer to the array
        customers.push(customer);

        // Clear the input fields
        document.getElementById("customerForm").reset();

        // Update the table
        updateTable();
    }

    function updateTable() {
        // Get the table body element
        var tableBody = document.getElementById("customerTableBody");

        // Clear existing rows
        tableBody.innerHTML = "";

        // Loop through the customers array and add rows to the table
        for (var i = 0; i < customers.length; i++) {
            var customer = customers[i];

            // Create a new row
            var row = tableBody.insertRow(i);

            // Insert cells with customer data
            var cellId = row.insertCell(0);
            var cellName = row.insertCell(1);
            var cellAddress = row.insertCell(2);
            var cellSalary = row.insertCell(3);

            // Populate cells with data
            cellId.innerHTML = customer.id;
            cellName.innerHTML = customer.name;
            cellAddress.innerHTML = customer.address;
            cellSalary.innerHTML = customer.salary;
        }
    }

