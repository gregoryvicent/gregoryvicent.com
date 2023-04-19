import Link from 'next/link'

import styles from '../../styles/Modal.module.css'

import ModalInterface from '../../interfaces/modalInterface'

const Modal: React.FC<ModalInterface> = ({ isOpen, handleClick }) => {
  return(
    <div 
      className={`${ styles.Modal } ${ isOpen ? styles.ModalOpen : styles.ModalClose }`}
    >
      <div className={ styles.ModalBox }>
	<ul className={ styles.ModalList }>
	  <li>
	    <Link href='/' className={ styles.ModalItem }>
	      Home
	    </Link> 
	  </li>
	  <li className={ styles.ModalItem }>
	    <Link href='/blog' className={ styles.ModalItem }>
	      Blog
	    </Link> 
	  </li>
	  <li className={`${ styles.ModalIconClose } ${ styles.ModalItem }`} onClick={ handleClick } >
	    X
	  </li>
	</ul>	
      </div>
    </div>
  )
}

export default Modal
