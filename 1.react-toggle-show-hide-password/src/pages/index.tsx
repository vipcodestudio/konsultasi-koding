import styles from '@/styles/Home.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <input
          type={showPassword ? 'text' : 'password'}
          className={styles.input}
          placeholder="******"
        />
        <button
          className={styles.icon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    </main>
  );
}
