# 🎯 Referral Generator

A lightweight Node.js and Express-based backend application for generating referral codes.  
Includes a minimal HTML frontend served from the `public/` folder.

---
Screenshots - 
<img width="1920" height="1020" alt="Screenshot 2025-08-05 222820" src="https://github.com/user-attachments/assets/1e72a747-1e86-48ba-b357-37bea3943756" />



<img width="1920" height="1020" alt="Screenshot 2025-08-05 222829" src="https://github.com/user-attachments/assets/78c26492-0654-4ea0-8901-e8d29e0c2db0" />


<img width="1920" height="1020" alt="Screenshot 2025-08-05 223958" src="https://github.com/user-attachments/assets/e7b2ba76-6a0e-4331-9d2f-b2a16fa98384" />



## 📌 Overview

The Referral Generator is a backend-driven service designed to generate unique referral codes, which can be integrated into onboarding flows, promotional campaigns, or partner programs. The project includes:

- 🔧 A simple REST API built with **Express.js**
- 🌐 A minimal frontend demo (`demo.html`) for quick testing
- 🧩 Easy deployment to platforms like **Vercel** or **Render**

---

## 🗂️ Folder Structure

```

Referral-Generator/
├── public/             # Static files (frontend)
│   └── demo.html       # Demo UI to interact with API
├── app.js              # Main Express app logic
├── server.js           # Entry point of the backend
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation

````

---

## ⚙️ Installation

> Requires **Node.js v14+**

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshitamaheshwari123/Referral-Generator.git
   cd Referral-Generator
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

4. **Visit the frontend**

   ```
   http://localhost:3000/demo.html
   ```

---

## 🚀 API Endpoint

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| GET    | `/generate` | Returns a new referral code |

> Example response:

```json
{
  "referralCode": "AB12CD34"
}
```

---

## 🌍 Deployment

This project can be deployed on:

* **[Render](https://render.com/)** — Recommended for full Node.js backend hosting
* **[Vercel](https://vercel.com/)** — Use with serverless functions *(requires some restructuring)*

> ✅ Ensure that `demo.html` is in the `public/` folder and Express serves static files from there.

---

## 🙋‍♀️ Author

**Harshita Maheshwari**
[GitHub Profile](https://github.com/harshitamaheshwari123)

---

Let me know if you’d like to add **screenshots**, **GIFs**, or **deployment status badges**!
