<?php
require 'vendor/autoload.php'; // Include the PHPExcel library

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    // Create a new PHPExcel object
    $objPHPExcel = new PHPExcel();

    // Add data to the Excel sheet
    $objPHPExcel->setActiveSheetIndex(0)
        ->setCellValue('A1', 'First Name')
        ->setCellValue('B1', 'Last Name')
        ->setCellValue('C1', 'Email')
        ->setCellValue('D1', 'Phone Number')
        ->setCellValue('E1', 'Address');

    $objPHPExcel->getActiveSheet()
        ->setCellValue('A2', $firstName)
        ->setCellValue('B2', $lastName)
        ->setCellValue('C2', $email)
        ->setCellValue('D2', $phone)
        ->setCellValue('E2', $address);

    // Save the Excel file
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
    $objWriter->save('customer_data.xlsx');

    echo "Data has been successfully stored in Excel sheet.";
} else {
    echo "Invalid request.";
}
?>
