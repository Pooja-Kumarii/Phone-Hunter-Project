# 📱 Phone Hunter Pro

A sleek, responsive, and high-performance phone search application. This project allows users to browse through a vast database of mobile devices, view detailed specifications, and explore various brands using the Programming Hero Phone API.

---

## 🚀 Live Demo
[**Click here to view the Live Website**](REPLACE_WITH_YOUR_GITHUB_PAGES_LINK)

---

## ✨ Key Features

* **Dynamic Search:** Real-time search functionality that fetches results based on user input (e.g., iPhone, Samsung, Huawei).
* **Show All Results:** A smart pagination feature that displays the first 12 results and reveals the full list upon request.
* **Professional UI/UX:** Built with **Tailwind CSS**, featuring a modern "Glassmorphism" navbar, responsive grid layouts, and smooth hover animations.
* **Detailed Insights:** A custom-built modal (popup) that displays specific hardware details like Chipset, Memory, and Sensors.
* **Loading States:** Integrated spinner to provide visual feedback during data fetching.
* **Error Handling:** Custom "No results found" states to guide the user.

---

## 🛠️ Technical Implementation (JS Functionality)

The core of this application is built with **Vanilla JavaScript**. Key concepts used include:

1.  **Fetch API:** Utilized to perform GET requests to the external Phone API.
2.  **Async/Await:** Used to handle asynchronous operations cleanly, ensuring the UI doesn't freeze while waiting for data.
3.  **DOM Manipulation:** Dynamically creating and injecting HTML elements into the grid and modal based on JSON responses.
4.  **Template Literals:** Used to build complex HTML structures (cards and modals) directly within JavaScript.
5.  **Event Handling:** Implementing `onclick` and search input listeners to trigger data updates.

---

## 📦 How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/phone-hunter.git](https://github.com/YOUR_USERNAME/phone-hunter.git)
