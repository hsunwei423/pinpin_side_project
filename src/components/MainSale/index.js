
import Tag from '@/components/common/Tag';
import ProgressBar from '@/components/common/ProgressBar';

import style from './style.module.scss';

export default function MainSale() {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <Tag className={style.tag} text="魔法科技" />
        <div className={style.title}>
          <h2>拍出會動的照片 |&ensp;</h2>
          <h2>LivePhotos 魔法拍立得</h2>
        </div>
        
        <div className={style['info-container']}>
          <div className={style['img-wrapper']}>
            <img src="imgs/livePhoto.jpeg" alt="livePhoto" />
          </div>
          <div className={style['info-wrapper']}>
            <div className={style['target-price']}>目標 ＄{600000}</div>
            <div className={style.price}>${280047}</div>
            <ProgressBar percent={41} />
          </div>
        </div>
      </div>
    </section>
  )
}