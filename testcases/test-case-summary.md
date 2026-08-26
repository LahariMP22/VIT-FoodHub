# VIT FoodHub - Test Case Summary

## 1. Introduction

Testing is performed to verify that the major functions of the VIT FoodHub system work as expected and that user actions produce the intended results.

## 2. Authentication Test Cases

### TC-01: Valid Login

**Input:** Valid username and password

**Expected Result:** User should be successfully logged into the system.

### TC-02: Invalid Login

**Input:** Incorrect username or password

**Expected Result:** The system should reject the login attempt and display an appropriate message.

### TC-03: Empty Login Fields

**Input:** Empty username and/or password

**Expected Result:** The system should request the user to enter the required information.

## 3. Food Browsing Test Cases

### TC-04: View Food Shops

**Action:** Open the food shop section.

**Expected Result:** Available food shops should be displayed.

### TC-05: View Menu

**Action:** Select a food shop.

**Expected Result:** The corresponding menu should be displayed.

### TC-06: View Food Item

**Action:** Select a food item.

**Expected Result:** Information about the selected food item should be displayed.

## 4. Cart Test Cases

### TC-07: Add Item to Cart

**Action:** Select a food item and add it to the cart.

**Expected Result:** The selected item should appear in the cart.

### TC-08: Update Cart Quantity

**Action:** Change the quantity of an item.

**Expected Result:** The item quantity and total should be updated accordingly.

### TC-09: Remove Item

**Action:** Remove an item from the cart.

**Expected Result:** The selected item should be removed from the cart.

## 5. Order Test Cases

### TC-10: Place Order

**Action:** Proceed with checkout after selecting food items.

**Expected Result:** The order should be created successfully.

### TC-11: Order Confirmation

**Action:** Complete the ordering process.

**Expected Result:** The system should display confirmation of the order.

### TC-12: Order Status

**Action:** View an existing order.

**Expected Result:** The current order status should be displayed.

## 6. General System Testing

### TC-13: Navigation

**Action:** Navigate between different sections of the application.

**Expected Result:** The user should be able to move between available sections without errors.

### TC-14: Form Validation

**Action:** Submit forms with missing or invalid information.

**Expected Result:** Appropriate validation messages should be displayed.

### TC-15: Data Consistency

**Action:** Perform operations involving food items, carts, and orders.

**Expected Result:** The displayed information should remain consistent with the performed operation.

## 7. Testing Objective

The objective of these test cases is to verify the basic functionality, usability, validation, and reliability of the VIT FoodHub application.
