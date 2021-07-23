import { useState } from 'react';

import UniversalHeader from '@/components/UniversalHeader';

import style from './style.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <UniversalHeader />
      <main className={style.main}>
        {children}
      </main>
      <footer>

      </footer>
    </>
  );
};