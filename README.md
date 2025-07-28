# Recipe Founder
Recipe Founder is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to discover delicious recipes, search for them, and save their favorites. It includes JWT-based authentication, user routing, and seamless recipe search powered by Axios.

Live Demo :-- https://recipe-founder-ten.vercel.app

🔐 Features
🔑 JWT Authentication – Secure login & registration
🔍 Recipe Search – Find recipes using a search bar (powered by Axios)
❤️ Favourites Section – Save and manage your favorite recipes
🛣️ Routing – User-friendly navigation and route protection
💾 MongoDB Integration – Stores users and their favorite recipes
🖼️ Screenshots
(Optional: Add screenshots or demo video link)

🏗️ Tech Stack
Frontend:
React.js
Axios
React Router
Context API 

CSS / TailwindCSS / Styled Components (based on your choice)

Backend: Node.js/Express.js/MongoDB/Mongoose/JWT (jsonwebtoken)/bcryptjs (for password hashing)/CORS / dotenv

1. Clone the repository
git clone Frontend:- https://github.com/your-username/recipe-founder.git
git clone Backend :- https://github.com/Shivek-Sharma24/RecipeFounderServer
cd recipe-founder

3. Create a .env file in /server:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

🔐 JWT Authentication
Protected routes are accessed only with valid JWT.
Tokens are stored in localStorage .
Middleware handles route protection on backend.

🧠 Concepts Implemented
React Hooks (useState, useEffect)
Axios for HTTP requests
Protected Routes using React Router
Password hashing with bcryptjs
Secure authentication with jsonwebtoken

🚀 Future Enhancements
Pagination and loading skeletons
Category-wise filtering
Rating system
Recipe creation & sharing
Profile settings & image uploads














