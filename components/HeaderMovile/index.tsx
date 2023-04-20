import styles from '../../styles/HeaderMovile.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import HandleClickInterface from '../../interfaces/handleClickInterface'

const HeaderMovile: React.FC<HandleClickInterface> = ({ handleClick }) => {
  return(
    <header className={ styles.HeaderMovile }>
      <div className={styles.HeaderMovileBoxIcon}>
	<FontAwesomeIcon icon={ faBars } className={ styles.HeaderMovileIcon } onClick={ handleClick } />
      </div>
      <hr className={styles.HeaderMovileLine}/>
    </header>
  )
}

export default HeaderMovile
