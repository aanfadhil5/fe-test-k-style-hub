# fe_test_k_style - Farhan Fadhilah

## Features

- **Brand list**
- **Product Catalog**
- **Product Details**

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.6.1
- **State Management**: TanStack Query (React Query) 5.80.1
- **Styling**: Tailwind CSS 4.1.8
- **Icons**: React Icons 5.5.0
- **Mock API**: JSON Server 1.0.0-beta.3

1. State Management
State management adalah proses mengatur dan menyimpan data yang sering berubah-ubah dalam aplikasi web, agar data tersebut tetap konsisten dan mudah diakses di berbagai komponen. Dalam pengembangan frontend, ini sangat penting untuk memastikan UI selalu sinkron dengan data yang sedang digunakan.
Beberapa contoh implementasinya yang saya kerjakan:
•	User Info: Menyimpan informasi pengguna yang sedang login, seperti nama, jabatan, atau divisi, yang kemudian digunakan secara global, misalnya untuk kebutuhan akses role-based atau tampilan personalisasi.
2. TanStack
Saya memiliki pengalaman menggunakan TanStack Query dan TanStack Table (sebelumnya React Table) dalam pengembangan frontend.
•	TanStack Query saya gunakan untuk pengambilan data dari API dengan dukungan caching dan auto-refetching. Salah satu contoh kasus penggunaannya adalah pada pengambilan data mesin yang divisualisasikan ke dalam bentuk dashboard. Fitur state management-nya juga sangat membantu untuk menyimpan dan mengelola response API, sehingga tidak perlu menulis ulang logika pemanggilan data di berbagai tempat.
•	TanStack Table saya gunakan sebagai komponen utama untuk menampilkan data dalam bentuk tabel. Library ini fleksibel dan sangat membantu, terutama saat saya perlu menerapkan pagination secara manual atau dengan pendekatan server-side pagination, tergantung kebutuhan proyek.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fe_test_k_style_hub
   ```

2. **Install**
   ```bash
   npm install
   ```

3. **Start the development servers**
   ```bash
   npm start
   ```

4. **Open browser**
   - React App: http://localhost:5173
   - JSON Server API: http://localhost:3001

## Routes

- `/brands`
- `/brands/:brandId/products`
- `/products/:productId`
