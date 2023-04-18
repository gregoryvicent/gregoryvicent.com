import styles from '../../styles/HeaderMovile.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function HeaderMovile({ handleClick }): JSX.Element {
  return(
    <header>
      <div className={styles.HeaderMovileBoxIcon}>
	<FontAwesomeIcon icon={faBars} className={styles.HeaderMovileIcon} onClick={ handleClick } />
      </div>
      <hr className={styles.HeaderMovileLine}/>
    </header>
  )
}
