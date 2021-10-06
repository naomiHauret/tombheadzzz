/** @ts-ignore **/
import styles from './index.module.css'
export const ui = {
  bg: {
    primary: `transition-all ${styles.cta} ${styles['cta--primary']} disabled:bg-neutral-200 relative`,
    secondary: `transition-all ${styles.cta} ${styles['cta--secondary']} disabled:bg-neutral-200 relative`,
    neutral: `transition-all ${styles.cta} bg-neutral-200 hover:bg-opacity-5 hover:bg-neutral-100 disabled:bg-neutral-200 relative`,
  },
  color: {
    primary: 'text-neutral-200 disabled:text-neutral-100 disabled:text-opacity-30',
    secondary: 'text-neutral-200 disabled:text-neutral-100 disabled:text-opacity-30',
    neutral:
      'text-neutral-100 hover:text-neutral-100 focus:text-neutral-100 disabled:text-neutral-100 disabled:text-opacity-30',
  },
  borderColor: {
    primary:
      'focus:ring focus:ring-3 focus:ring-pink-100 focus:ring-opacity-75 border-pink-100 border-opacity-80 hover:border-opacity-75 disabled:border-neutral-100 disabled:border-opacity-25',
    secondary:
      'focus:ring focus:ring-3 focus:ring-green-100 focus:ring-opacity-75 border-green-100 border-opacity-80 hover:border-opacity-75 disabled:border-neutral-100 disabled:border-opacity-25',
    neutral:
      'focus:ring focus:ring-3 focus:ring-neutral-100 focus:ring-opacity-75 border-neutral-100 border-opacity-25 hover:border-opacity-50 focus:border-opacity-75 disabled:border-opacity-25 ',
  },
  space: {
    default: 'py-3 px-6',
    lg: 'p-3 sm:px-8',
  },
  radius: {
    default: 'rounded-1',
    lg: 'rounded-1',
  },
  borderWidth: {
    default: 'border-1',
    lg: 'border-1',
  },
  borderStyle: {
    default: 'border-solid',
    lg: 'border-solid',
  },
  textStyle: {
    default: 'text-sm xs:text-base-min sm:text-base tracking-2.5',
    lg: 'text-base-min xs:text-base sm:text-md tracking-2.5',
  },
}
