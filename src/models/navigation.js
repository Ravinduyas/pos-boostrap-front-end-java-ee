
    function showCustomerForm() {
        document.getElementById('customerForm').style.display = 'block';
        document.getElementById('itemForm').style.display = 'none';
        document.getElementById('orderForm').style.display = 'none';
    }

    function showItemForm() {
        document.getElementById('customerForm').style.display = 'none';
        document.getElementById('itemForm').style.display = 'block';
        document.getElementById('orderForm').style.display = 'none';
    }

    function showOrderForm() {
        document.getElementById('customerForm').style.display = 'none';
        document.getElementById('itemForm').style.display = 'none';
        document.getElementById('orderForm').style.display = 'block';
    }

    // Dummy functions for illustration
    function saveCustomer() {
        console.log('Customer saved');
    }

    function saveItem() {
        console.log('Item saved');
    }

    function placeOrder() {
        console.log('Order placed');
    }
