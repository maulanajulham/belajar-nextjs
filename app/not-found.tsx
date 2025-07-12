// app/not-found.tsx
'use client'; // This must be at the very top

import Link from 'next/link';
// REMOVE THIS LINE IF YOU HAD IT: import { Metadata } from 'next';

// REMOVE THIS BLOCK ENTIRELY:
// export const metadata: Metadata = {
//   title: 'Halaman Tidak Ditemukan - 404',
//   description: 'Maaf, halaman yang Anda cari tidak ada.',
// };

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f2f5',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      {/* For SEO title/description in a Client Component route segment,
          you'd typically rely on a parent Server Component's layout.tsx
          or a dynamic title update if needed, but for 404,
          the root layout's metadata usually covers the basics.
          If using Pages Router (pages/404.tsx), you'd use <Head> here. */}

      <h1
        style={{
          fontSize: '8rem',
          margin: '0',
          color: '#ff6b6b',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: '2rem',
          marginTop: '10px',
          marginBottom: '30px',
          color: '#555',
        }}
      >
        Ups! Halaman yang Anda cari tidak dapat ditemukan.
      </p>
      <p
        style={{
          fontSize: '1.2rem',
          color: '#777',
          maxWidth: '600px',
          lineHeight: '1.5',
        }}
      >
        Mungkin Anda salah mengetik alamat, atau halaman tersebut telah
        dipindahkan atau dihapus.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '40px',
          padding: '12px 25px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition:
            'background-color 0.3s ease, transform 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#007bff';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}