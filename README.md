# MovieMood 🎥

**MovieMood** is a full-stack web application that recommends movies based on your current mood. Built with React, TailwindCSS, Spring Boot, and MySQL, this project allows users to discover films and save their favorites.

---

## 📚 Features

* 😊 Mood-based movie discovery (Happy, Sad, Bored, Angry)
* 🎥 Real-time movie suggestions using TMDB API
* ⭐ Save favorite movies to backend
* 🔍 View and delete saved favorites
* 💾 Backend powered by Spring Boot + MySQL (Dockerized)
* ⚙️ API documentation via Swagger UI

---

## 🌐 Technologies Used

### Frontend:

* React + Vite
* TailwindCSS
* React Router DOM

### Backend:

* Spring Boot 3
* Spring Data JPA
* MySQL 8 (via Docker)
* Springdoc OpenAPI (Swagger)

---

## ⚡ Setup

### 1. Clone the repo

```bash
git clone https://github.com/fdelvalle01/moviemood.git
cd moviemood
```

### 2. Start MySQL via Docker

```bash
docker run --name moviemood-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=moviemood -p 3306:3306 -d mysql:8
```

### 3. Backend

```bash
cd backend
./gradlew bootRun
```

* Swagger UI: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

### 4. Frontend

```bash
cd moviemood-frontend
npm install
npm run dev
```

* App runs at: [http://localhost:5173](http://localhost:5173)

---

## ✨ Screenshots

*(You can add screenshots here of the app UI)*

---

## ✍️ License

MIT License

---

## 🚀 Author

**Francisco Del Valle**
GitHub: [@fdelvalle01](https://github.com/fdelvalle01)
