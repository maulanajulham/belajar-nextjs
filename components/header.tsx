import React from 'react'; // Ini tidak wajib di React 17+ JSX transform, tapi kebiasaan baik
import Image from 'next/image';
import AcmeLogo from '@/app/ui/acme-logo';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center', // Pastikan ini ada dan bernilai 'center'
      backgroundColor: 'blue',
      padding: '15px 30px',
      color: 'white',
      borderBottom: '1px solid #61dafb'
    }}>
      {/* Bagian Kiri: Logo Perusahaan */}
      <div style={{
        // Tambahkan display flex dan align-items center jika logo memiliki teks di sebelahnya
        // Untuk kasus ini, cukup pastikan div tidak memiliki padding/margin aneh
        display: 'flex',
        alignItems: 'center', // Memastikan konten di dalam div ini juga sejajar
      }}>
        <AcmeLogo />
                {/* ...*/}
      </div>

      {/* Bagian Kanan: Navigasi */}
      <nav>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0, // Pastikan margin 0 untuk menghilangkan margin default browser
          display: 'flex',
          alignItems: 'center', // Tambahkan ini ke ul agar item li sejajar
          gap: '25px'
        }}>
          <li>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>
              Contact
            </a>
          </li>
          <li>
            <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>
              About
            </a>
          </li>
          <li>
            <a href="/profile" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;