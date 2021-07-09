import { useState } from 'react';

import UniversalHeader from '@/components/UniversalHeader';

export default function Layout({ children }) {
  return (
    <>
      <UniversalHeader />
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </>
  );
};