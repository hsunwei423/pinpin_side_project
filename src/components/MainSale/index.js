
import Tag from '@/components/common/Tag';
import ProgressBar from '@/components/common/ProgressBar';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';

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
  description1: '專案募資中！',
  description2: '在 2021/06/14 23:59 募資結束前，您都可以贊助我們！'
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

              <div className={style['icon_list']}>
                <img src="imgs/icon_good01.svg" />
                <img src="imgs/icon_good02.svg" />
                <img src="imgs/icon_good03.svg" />
                <img src="imgs/icon_good04.svg" />
              </div>

              <div className={style.description}>
                <p>{mock.description1}</p>
                <p>{mock.description2}</p>
              </div>

              <Button
                text="贊助專案"
                type="primary"
                size="large"
              />

              <div className={style['btn-wrapper']}>
                <Button 
                  text="追蹤專案"
                  type="simple"
                />
                <Button 
                  text="分享"
                  type="simple"
                />
              </div>
            </div>
          </div>
      </Section>
    </section>
  )
}