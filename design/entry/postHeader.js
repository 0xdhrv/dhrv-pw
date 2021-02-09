/* eslint-disable react/prop-types */
import { memo } from 'react'
import cn from 'classnames'

import Link from '@design/link'
import styles from './postheader.module.css'

const PostHeader = ({ title, description, date, href, as }) => {
  return (
    <li className={styles.item}>
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title} (${description})`}
        className={styles.link}
      >
        <div>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          {description && (
            <p className={cn(styles.description, 'clamp')}>{description}</p>
          )}
        </div>
        <div className="space"></div>
        <div className={styles.date}>{date}</div>
      </Link>
    </li>
  )
}

export default memo(PostHeader)
