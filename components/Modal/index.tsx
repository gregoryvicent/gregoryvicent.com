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
	    <Link onClick={ handleClick } href='/' className={ styles.ModalItem }>
	      Home
	    </Link> 
	  </li>
	  <li className={ styles.ModalItem }>
		<Link onClick={ handleClick } href='/work' className={ styles.ModalItem }>
			Trabajemos
		</Link>
	  </li>
	  {/* <li className={ styles.ModalItem }>
	    <Link onClick={ handleClick } href='/blog' className={ styles.ModalItem }>
	      Blog
	    </Link> 
	  </li> */}
	  <li className={`${ styles.ModalIconClose } ${ styles.ModalItem }`} onClick={ handleClick } >
	    X
	  </li>
	</ul>	
      </div>
    </div>
  )
}

export default Modal
