import style from './style.module.scss';

export default function ProgressBar({ percent = 0 }) {
  return (
    <div className={style.container}>
      <div 
        className={style.progress}
        style={{
          width: `${percent}%`
        }}
      >
        <span>{percent}%</span>
      </div>
    </div>
  )
}