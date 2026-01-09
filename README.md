# Hariff Projects - CMS (Content Management System)

<p align="center">
  <img src="https://vitejs.dev/logo.svg" width="100" alt="Vite Logo">
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="100" alt="React Logo">
</p>

## 📋 Tentang Project

Content Management System (CMS) untuk Hariff Projects yang dibangun menggunakan React + Vite. Aplikasi ini berfungsi sebagai admin panel untuk mengelola konten website Hariff Projects.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 7.3.1
- **HTTP Client**: Axios
- **Node.js**: 20.18.0
- **Package Manager**: NPM 10.8.2

## 📦 Requirements

- Node.js >= 20.18.0
- NPM >= 10.8.2
- Backend API running on `http://localhost:8000`

## 🚀 Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd CMS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

API endpoint sudah dikonfigurasi di `src/api/axios.js` dengan default:

```javascript
baseURL: 'http://localhost:8000/api'
```

Jika backend berjalan di URL berbeda, edit file `src/api/axios.js`.

## 🏃 Running the Application

### Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
CMS/
├── public/                    # Static assets
├── src/
│   ├── api/
│   │   └── axios.js          # Axios instance configuration
│   ├── components/           # Reusable components
│   ├── pages/                # Page components
│   ├── assets/               # Images, fonts, etc.
│   ├── App.jsx               # Main App component
│   ├── App.css               # App styles
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔌 API Integration

### Axios Instance

Semua HTTP requests menggunakan configured axios instance dari `src/api/axios.js`:

```javascript
import axiosInstance from './api/axios'

// Example GET request
const response = await axiosInstance.get('/endpoint')

// Example POST request
const response = await axiosInstance.post('/endpoint', data)
```

### Available Interceptors

- **Request Interceptor**: Menambahkan token authentication (jika ada)
- **Response Interceptor**: Handle error responses secara global

## ✅ Testing Backend Connection

Saat aplikasi pertama kali dijalankan, halaman utama akan otomatis:

1. Memanggil endpoint `/api/health-check`
2. Menampilkan status koneksi:
   - ✅ **Connected** - Backend terhubung dengan baik
   - ❌ **Disconnected** - Backend tidak tersedia

### Expected Response

```json
{
  "status": "connected",
  "timestamp": "2026-01-09T10:30:00.000000Z",
  "service": "Hariff Projects API"
}
```

## 🎨 Styling

- CSS Modules atau plain CSS
- Responsive design
- Dark mode support (default theme)

## 🔧 Development Tools

### ESLint

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## 📝 Common Tasks

### Create New Component

```bash
# Create component file
src/components/YourComponent.jsx
```

### Create New Page

```bash
# Create page file
src/pages/YourPage.jsx
```

### Add New API Endpoint

```javascript
// In your component
import axiosInstance from '../api/axios'

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/your-endpoint')
    console.log(response.data)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## ⚠️ Known Issues

- **Node.js Version Warning**: Vite 7.3.1 merekomendasikan Node.js 20.19+ atau 22.12+, namun versi 20.18.0 masih bisa berjalan dengan baik.

## 🚀 Deployment

### Build Production

```bash
npm run build
```

### Deploy to Hosting

Upload folder `dist/` ke web hosting Anda (Netlify, Vercel, dll)

### Environment Variables for Production

Untuk production, update `baseURL` di `src/api/axios.js` ke production API URL.

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Axios Documentation](https://axios-http.com/)

## 🔐 Security

- Jangan commit sensitive data (API keys, tokens) ke repository
- Gunakan environment variables untuk konfigurasi
- Validasi semua input dari user

## 👨‍💻 Development Guidelines

1. **Component Naming**: Gunakan PascalCase untuk component names
2. **File Organization**: Kelompokkan file berdasarkan feature/module
3. **Code Style**: Ikuti ESLint configuration yang sudah ada
4. **Git Commits**: Gunakan meaningful commit messages

## 📄 License

MIT License