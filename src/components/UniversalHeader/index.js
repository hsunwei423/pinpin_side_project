import { useState } from 'react';
import Link from 'next/link';

import Button from '@/components/common/Button';

import { NAV_LIST } from './const';

import style from './style.module.scss';

export default function UniversalHeader() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <nav>
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

        <div className={style['log-area']}>
          <Button text="Signin" size="small" />
          <Button text="Signup" size="small" type="simple" />
        </div>
      </div>
    </div>
  );
};