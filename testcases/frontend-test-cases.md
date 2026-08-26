# VIT FoodHub - Frontend Test Cases

## 1. Login

| Test Case ID | Scenario | Steps | Expected Result |
|---|---|---|---|
| TC-F01 | Valid login | Enter valid email and password, then click Login | User is successfully logged in and redirected to the dashboard |
| TC-F02 | Invalid login | Enter invalid email or password and click Login | An appropriate error message is displayed |

## 2. Food Browsing

| Test Case ID | Scenario | Steps | Expected Result |
|---|---|---|---|
| TC-F03 | View food items | Open the food menu/shop section | Available food items are displayed with relevant details |
| TC-F04 | View food item details | Select a food item | Item details such as name, price and other information are displayed |

## 3. Cart

| Test Case ID | Scenario | Steps | Expected Result |
|---|---|---|---|
| TC-F05 | Add item to cart | Select a food item and click Add to Cart | Selected item appears in the cart |
| TC-F06 | Remove item from cart | Open the cart and remove an item | Item is removed and cart total is updated |

## 4. Checkout and Order

| Test Case ID | Scenario | Steps | Expected Result |
|---|---|---|---|
| TC-F07 | Place an order | Add an item to the cart and complete checkout | Order is successfully placed |
| TC-F08 | Generate order token | Complete the order placement process | A token/order identifier is displayed to the user |

## 5. Order Tracking

| Test Case ID | Scenario | Steps | Expected Result |
|---|---|---|---|
| TC-F09 | View order status | Open the order tracking section | Current order status is displayed |
| TC-F10 | View order history | Open the order history section | Previous orders are displayed correctly |