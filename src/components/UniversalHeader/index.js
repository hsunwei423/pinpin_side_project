import { useState } from 'react';
import Link from 'next/link';

import style from './style.module.scss';

export default function UniversalHeader() {
  return (
      <nav className={style.container}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
  );
};