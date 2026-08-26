# 🍔 VIT FoodHub

## Smart Food Court Ordering & Queue Management System

VIT FoodHub is a web-based food court ordering and queue management system developed for VIT campus.

The system is designed to reduce physical queues at food courts by allowing students to browse food courts and shops, view menus, place orders, receive virtual tokens, and track their orders.

The application provides separate interfaces for three major user roles:

- 👨‍🎓 Student
- 👨‍🍳 Shopkeeper
- 👨‍💼 Administrator

> 🚧 **Current Status:** Frontend development completed. Backend, database, and API integration will be implemented in the next development phase.

---

# 📌 Project Purpose

The purpose of VIT FoodHub is to provide a simple digital solution for food ordering and queue management inside the VIT campus.

The system aims to:

- Reduce physical waiting time at food courts.
- Allow students to place food orders digitally.
- Provide virtual tokens for order collection.
- Allow students to track their order status.
- Help shopkeepers manage incoming orders.
- Provide administrators with centralized management facilities.

The project is developed as an academic course project using Agile/Scrum methodology.

---

# ✨ Key Features

## 👨‍🎓 Student Features

- Registration
- Login
- Browse food courts
- Browse food shops
- View menus
- Search food items
- Check food availability
- Add items to cart
- Update item quantity
- Place orders
- Simulated online payment
- Virtual token generation
- QR code generation
- Order status tracking
- Estimated pickup time
- Order history
- Rating and feedback

## 👨‍🍳 Shopkeeper Features

- Shopkeeper login
- Shopkeeper dashboard
- View incoming orders
- Manage order status
- Manage menu items
- Update food availability
- Inventory management
- Virtual token / QR verification
- Complete orders

## 👨‍💼 Administrator Features

- Administrator login
- Admin dashboard
- Food court management
- Shop management
- User management
- Reports
- Analytics

---

# 🖥️ Frontend Implementation

The current repository contains the frontend implementation of VIT FoodHub.

The application provides separate role-based dashboards and interfaces.


VIT FoodHub
│
├── 👨‍🎓 Student
│   ├── Dashboard
│   ├── Food Courts
│   ├── Shops
│   ├── Menu
│   ├── Search
│   ├── Cart
│   ├── Checkout
│   ├── Payment
│   ├── Virtual Token
│   ├── QR Code
│   ├── Order Tracking
│   ├── Order History
│   └── Feedback
│
├── 👨‍🍳 Shopkeeper
│   ├── Dashboard
│   ├── Orders
│   ├── Menu Management
│   ├── Inventory
│   └── Token Verification
│
└── 👨‍💼 Administrator
    ├── Dashboard
    ├── Food Court Management
    ├── Shop Management
    ├── User Management
    └── Reports & Analytics
🔄 Main Student Ordering Flow
Login / Register
       ↓
Student Dashboard
       ↓
Browse Food Courts
       ↓
Select Shop
       ↓
View Menu
       ↓
Check Availability
       ↓
Add Items to Cart
       ↓
Checkout
       ↓
Payment
       ↓
Virtual Token
       ↓
QR Code
       ↓
Track Order
       ↓
Order Ready
       ↓
Collect Food
🛠️ Technology Stack
Frontend
Technology	Purpose
React	Frontend UI development
JavaScript	Application logic
Vite	Development server and build tool
HTML5	Page structure
CSS / UI Styling	Interface styling
npm	Package management

Note: Backend technologies such as Node.js, Express.js, and MongoDB are not included in the current repository because the current phase focuses on frontend development.

Planned Backend

The backend phase will be implemented separately using the technologies selected by the team.

Planned backend components include:

Frontend
   ↓
REST APIs
   ↓
Backend Server
   ↓
Database
📊 Agile Methodology

The project follows the Agile Scrum methodology.

The development was divided into 4 sprints.

Sprint 1 – Project Planning

Activities included:

Requirement gathering
Stakeholder analysis
Scope definition
Sprint planning
Work Breakdown Structure
Project planning
Sprint 2 – Requirements & Product Backlog

Activities included:

Epic identification
User story creation
User story prioritization
Story point estimation
Use case diagram
Activity diagram
Product backlog
Sprint backlog
Sprint 3 – Agile Tool Configuration

Agile project management tools were configured and evaluated.

Tools used:

Monday.com
Jira

Activities included:

Sprint planning
Sprint backlog management
User story assignment
Team member assignment
Kanban board
Workflow configuration
Sprint dashboard
Workload analysis
Agile tool comparison
Sprint 4 – Development

The project moved into the actual development phase.

Current activities include:

Frontend implementation
Role-based interfaces
Student ordering flow
Shopkeeper interface
Administrator interface
UI implementation based on approved user stories
👥 Team Members & Roles
Team Member	Role
Lahari	: Frontend Development / Project Coordination
Disha	: Backend Development
Sagar	: UI/UX Design & Documentation
Praveena	: Testing & Integration


📋 User Roles
Role	Main Responsibilities
Student	Browse food, place orders, receive tokens, track orders
Shopkeeper	Manage menu, inventory, incoming orders and token verification
Administrator	Manage users, shops, food courts and reports
🚀 Running the Project Locally
1. Clone the Repository
git clone https://github.com/LahariMP22/VIT-FoodHub.git
2. Navigate to the Project
cd VIT-FoodHub
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The terminal will display the local development URL.

Open that URL in a web browser to access the application.

📂 Repository

GitHub Repository:

https://github.com/LahariMP22/VIT-FoodHub

The repository contains the current frontend implementation of the VIT FoodHub project.

The repository will be updated as development progresses.

📸 Website Preview
1. Login Screen
<img width="1363" height="717" alt="VIT FoodHub Login Screen" src="https://github.com/user-attachments/assets/16fd6ac7-ee13-424d-be8e-29b9440d2f28" />
2. Student Dashboard
<img width="1348" height="767" alt="VIT FoodHub Student Dashboard" src="https://github.com/user-attachments/assets/d0376cfc-39c1-480c-a4dd-ef243bddce92" />
3. Shopping Cart
<img width="1365" height="702" alt="VIT FoodHub Shopping Cart" src="https://github.com/user-attachments/assets/03ae93e0-3369-4dda-b1cd-0c9a95af231d" />
4. Checkout
<img width="1365" height="708" alt="VIT FoodHub Checkout" src="https://github.com/user-attachments/assets/edaadbfc-57c1-4cae-9192-554e8470eba3" />
5. Order Placement & Virtual Token
<img width="1365" height="720" alt="VIT FoodHub Order & Token" src="https://github.com/user-attachments/assets/30299a43-0ca5-467e-b21a-69a5fa7e4e19" />
6. Shopkeeper Dashboard
<img width="1364" height="717" alt="VIT FoodHub Shopkeeper Dashboard" src="https://github.com/user-attachments/assets/ba6a15b9-de7b-40f9-b04b-e23eb1984637" />
7. Administrator Dashboard
<img width="1363" height="713" alt="VIT FoodHub Administrator Dashboard" src="https://github.com/user-attachments/assets/ebb62157-f233-4841-9216-305a7191fb71" />
8. Administrator Reports
<img width="1365" height="720" alt="VIT FoodHub Admin Reports" src="https://github.com/user-attachments/assets/3adaec18-c829-42ad-97eb-bdc3187652d4" />
