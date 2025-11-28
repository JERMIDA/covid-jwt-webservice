# COVID-JWT Web Service

A secure web application demonstrating **web services integration and security** using **JWT authentication**.  
The project fetches global COVID-19 data from an external REST API, transforms it, and displays it in a **responsive, user-friendly frontend**.

---

## **Features**

- User login with **JWT authentication**
- Protected backend endpoint for COVID-19 data
- Integration with **external RESTful API** (`https://disease.sh/v3/covid-19/all`)
- Data transformation for easy reading
- Responsive UI using React
- Error handling and logging
- Logout functionality

---

## **Technologies Used**

- **Backend:** Node.js, Express, Axios, JWT, bcrypt, dotenv, CORS  
- **Frontend:** React, Vite, Axios, CSS Grid/Flex for responsive layout  
- **Other Tools:** Git & GitHub for version control, Postman for API testing

---

## **Project Structure**

```
covid-jwt-webservice/
├─ backend/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ routes/
│  ├─ logs/
│  ├─ server.js
│  └─ .env
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  └─ package.json
├─ README.md
└─ .gitignore
```

---

## **Setup Instructions**

### **Backend**

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following:

```
PORT=5000
JWT_SECRET=superstrongsecret123
EXTERNAL_API=https://disease.sh/v3/covid-19/all
```

4. Start the backend server:

```bash
node server.js
```

Server will run on: `http://localhost:5000`

---

### **Frontend**

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## **Usage**

1. Open the frontend in your browser.  
2. Login with:

```
Username: student
Password: 123456
```

3. Click **Fetch COVID Data** to retrieve global statistics.  
4. Logout using the **Logout** button.

---

## **API Endpoints**

### **Login**

```
POST /auth/login
Body:
{
  "username": "student",
  "password": "123456"
}
```

- Returns a JWT token on successful login.

### **Get COVID Data (Protected)**

```
GET /data/covid
Headers:
Authorization: Bearer <JWT_TOKEN>
```

- Returns transformed global COVID-19 statistics.

---

## **Error Handling & Logging**

- Backend logs all requests to `backend/logs/app.log`.  
- Frontend alerts the user if login or data fetch fails.

---

## **Screenshots**

- **Login Page:** ![Login](assets/login.png)  
- **COVID Stats Display:** ![Stats](assets/covid-cards.png)  
- **JWT Token Example:** ![Token](assets/token.png)