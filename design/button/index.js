/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import styles from './button.module.css'

import { forwardRef } from 'react'
import cn from 'classnames'

const Button = forwardRef(
  ({ onClick, children, disabled, className, transparent, underline }, ref) => {
    const c = cn(className, styles.button, {
      [styles.transparent]: transparent,
      [styles.underline]: underline
    })
    return (
      <button onClick={onClick} disabled={disabled} ref={ref} className={c}>
        {children}
      </button>
    )
  }
)

export default Button
