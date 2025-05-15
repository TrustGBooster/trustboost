// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/setup'); // change to /dashboard or /redeem if needed
  }, [router]);

  return null;
}