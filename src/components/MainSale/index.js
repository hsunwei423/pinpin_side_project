
import Tag from '@/components/common/Tag';

import style from './style.module.scss';

export default function MainSale() {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <Tag className={style.tag} text="魔法科技" />
        <h2>拍出會動的照片 | LivePhotos 魔法拍立得</h2>
      </div>
    </section>
  )
}