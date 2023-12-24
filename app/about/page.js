import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js tutorial 😎</h1>
      <Link href="/client" className="btn btn-accent">
        get started
      </Link>
    </div>
  );
};

export default AboutPage;
