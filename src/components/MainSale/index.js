
import Tag from '@/components/common/Tag';
import ProgressBar from '@/components/common/ProgressBar';
import Section from '@/components/common/Section';

import style from './style.module.scss';

const mock = {
  tag: '魔法科技',
  title: '拍出會動的照片 | LivePhotos 魔法拍立得',
  productImg: 'imgs/livePhoto.jpeg',
  target: 600000,
  current: 280047,
  sponsorPeople: 1374,
  sponsorLastDay: 27,
  deadlineTime: 1623715199,
  isTracked: true,

};

export default function MainSale() {
  return (
    <section className={style.container}>
      <Section>
        <Tag className={style.tag} text={mock.tag} />
          <div className={style.title}>
            <h2>{mock.title}</h2>
          </div>
          
          <div className={style['info-container']}>
            <div className={style['img-wrapper']}>
              <img src={mock.productImg} alt="livePhoto" />
            </div>

            <div className={style['info-wrapper']}>
              <div className={style['target-price']}>目標 ＄{mock.target}</div>
              <div className={style.price}>${mock.current}</div>
              <ProgressBar percent={Math.floor(mock.current * 100 / mock.target)} />

              <div className={style.sponsor}>
                <div className={style.people}>
                  <div className={style.title}>贊助人數</div>
                  <div className={style.value}>
                    {`${mock.sponsorPeople} 人`}
                  </div>
                </div>
                <div className={style.day}>
                  <div className={style.title}>募資倒數</div>
                  <div className={style.value}>
                    {mock.sponsorLastDay} 天
                  </div>
                </div>
              </div>
            </div>

          </div>
      </Section>
    </section>
  )
}