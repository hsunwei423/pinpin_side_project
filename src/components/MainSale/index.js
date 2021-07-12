
import Tag from '@/components/common/Tag';

import style from './style.module.scss';

export default function MainSale() {
  return (
    <section className={style.container}>
      <Tag className={style.tag} text="魔法科技" />
    </section>
  )
}