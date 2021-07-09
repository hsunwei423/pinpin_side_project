import { useState } from 'react';
import Link from 'next/link';

import { NAV_LIST } from './const';

import style from './style.module.scss';

export default function UniversalHeader() {
  return (
      <nav className={style.container}>
        <ul>
          {
            NAV_LIST.map((d, index) => {
              return (
                <li key={index}>
                  <Link href={d.link}>
                    <a>{d.title}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
  );
};