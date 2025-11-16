# 📄 Smart Docs Search

Smart Docs Search is a full-stack web application that allows users to upload documents, automatically categorize them, extract searchable content, and search across documents with a modern UI.

---

## 🚀 Features

### 🔧 Backend
- Document uploads with Cloudinary storage  
- File parsing for PDFs, Word, and text files  
- Full-text indexing for fast document search  
- REST APIs for documents and search  
- Centralized error handling  
- Mongoose models for structured data  

### 🎨 Frontend
- Built with React + Vite  
- Fully responsive modern interface  
- Document cards with shimmer loaders  
- Full document preview  
- Real-time search page  
- Simple and intuitive upload workflow  
- Axios instance for consistent API communication  
- Clean, reusable components  

---

## 🛠️ Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- Cloudinary  
- Multer  

### Frontend
- React  
- Vite  
- Axios  

---

## 📦 Installation & Setup

### Clone the repository
```bash
git clone  https://github.com/rajat-sharma-3745/smart-docs-search.git
cd smart-docs-search
```

### Backend

1. Open a terminal and `cd` into the backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `Backend/` (see **Environment variables** below). Example:

``` bash
MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
```

4. Run the server in development (common scripts):

```bash
npm start
```

* Otherwise start directly with Node:

```bash
node server.js
```

The backend typically listens on port `3000` (or the port set in `.env`).

### Frontend

1. Open a separate terminal and `cd` into the frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the Vite dev server:

```bash
npm run dev
```

By default Vite serves the app on `http://localhost:5173/` (or the port shown in the terminal). Ensure the frontend's `axiosInstance.js` uses the backend base URL (e.g., `http://localhost:3000/api`) 
