# 🏨 Node.js Booking API

This is the backend repository for a comprehensive **Booking API** designed to handle user authentication, room management, and reservation processing. Built with Node.js and Express, this project demonstrates solid skills in designing secure, scalable, and well-structured backend applications.

## ✨ Core Features

* **Robust Authentication:** Secure user registration and login implemented with **JSON Web Tokens (JWT)** for stateless session management.
* **Role-Based Authorization:** Implemented access control to differentiate between standard **Users** (who can view and book) and **Admins** (who can manage room inventory).
* **Full CRUD Operations:** Complete API endpoints for managing:
    * **Users** (Registration, Profile viewing).
    * **Rooms/Hotels** (Admin only creation and management).
    * **Bookings** (Creation, retrieval, and deletion of reservations).
* **Modern Language Stack:** Developed entirely using **TypeScript** for improved code quality, static type checking, and maintainability.
* **Error Handling:** Centralized, efficient error handling middleware to provide clean and descriptive API responses.

## ⚙️ Tech Stack & Dependencies

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Runtime** | Node.js | Asynchronous, event-driven JavaScript runtime. |
| **Framework** | Express.js | Fast, unopinionated, minimalist web framework for Node.js. |
| **Language** | JavaScript (ES6+) | The primary programming language used. |
| **Database** | MongoDB / Mongoose | Flexible NoSQL database and its object modeling library. |
| **Security** | JWT (JSON Web Tokens) | Used for user authentication and secure information exchange. |
| **Hashing** | bcrypt | Used for securely hashing user passwords. |

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* Node.js (v18+)
* MongoDB Instance (Local or remote Atlas cluster)

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YusRadwan/Node.js-Developer.git](https://github.com/YusRadwan/Node.js-Developer.git)
    cd Node.js-Developer/6-Project/4-Booking-API
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a file named **`.env`** in the project root and add your configuration:
    ```env
    PORT=3000
    MONGODB_URI="<YOUR_MONGO_CONNECTION_STRING>"
    JWT_SECRET="<A_VERY_STRONG_SECRET_KEY>"
    ```

4.  **Run the Server:**
    To compile the TypeScript and start the server:
    ```bash
    npm start
    # Or, for development with automatic restarts:
    npm run dev
    ```
    The API will be running at `http://localhost:3000`.

## 🧪 Testing (Crucial Next Step)

*(Add this section once you implement testing. It is highly recommended.)*

This project uses **[Jest / Mocha]** for testing. To run the test suite:

```bash
npm run test