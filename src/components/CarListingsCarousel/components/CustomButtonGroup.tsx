import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import styles from './styles.module.css';

interface ICustomButtonGroup extends ButtonGroupProps {
  className?: string;
}

const CustomButtonGroup = ({ next, previous, ...rest }: ICustomButtonGroup) => {
  const currentSlide = rest?.carouselState?.currentSlide;

  const handlePreviousButtonClick = () => {
    if (previous) {
      previous();
    }
  };

  const handleNextButtonClick = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={
          currentSlide === 0 ? `${styles.btn} ${styles.hidden}` : styles.btn
        }
        role='button'
        onClick={handlePreviousButtonClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 40 40'
          style={{ transform: 'rotate(180deg)' }}
        >
          <circle
            cx='20'
            cy='20'
            r='18.5'
            fill='white'
            stroke='#333'
            strokeWidth='1'
          ></circle>
          <rect
            x='24.9141'
            y='20.3457'
            width='10.4911'
            height='0.5'
            rx='0.25'
            transform='rotate(-135 24.9141 20.3457)'
            fill='none'
            stroke='#333'
            strokeWidth='1'
          ></rect>
          <rect
            x='17.4942'
            y='27.0703'
            width='10.4758'
            height='0.5'
            rx='0.25'
            transform='rotate(-45 17.4942 27.0703)'
            fill='none'
            stroke='#333'
            strokeWidth='1'
          ></rect>
        </svg>
      </div>
      <div className={styles.btn} role='button' onClick={handleNextButtonClick}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
          <circle
            cx='20'
            cy='20'
            r='18.5'
            fill='white'
            stroke='#333'
            strokeWidth='1'
          ></circle>
          <rect
            x='24.9141'
            y='20.3457'
            width='10.4911'
            height='0.5'
            rx='0.25'
            transform='rotate(-135 24.9141 20.3457)'
            fill='none'
            stroke='#333'
            strokeWidth='1'
          ></rect>
          <rect
            x='17.4942'
            y='27.0703'
            width='10.4758'
            height='0.5'
            rx='0.25'
            transform='rotate(-45 17.4942 27.0703)'
            fill='none'
            stroke='#333'
            strokeWidth='1'
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default CustomButtonGroup;
