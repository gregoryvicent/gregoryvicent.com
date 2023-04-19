import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLinkedin, 
  faTwitter,
  faGithub,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import styles from '../../styles/Contacts.module.css'

export default function Contacts(): JSX.Element {
  return(
    <div className={ styles.Contacts }>
      <h2 className={ styles.ContactsTitle }>Encuentrame en:</h2>
      <div className={ styles.ContactsBox }>
	<div className={ styles.ContactsSubBox}>
	  <a className={ styles.ContactsButton } href="https://www.linkedin.com/in/gregory-vicent-dev/" target="_black">
	    Linkedin
	    <br />
	    <FontAwesomeIcon icon={faLinkedin} className={ styles.ContactsIcon } />
	  </a>
	  <a className={ styles.ContactsButton } href="https://github.com/gregoryvicent" target="_black">
	    GitHub
	    <br />
	    <FontAwesomeIcon icon={faGithub} className={ styles.ContactsIcon } />
	  </a>
	</div>
	<div className={ styles.ContactsSubBox}>
	  <a className={ styles.ContactsButton } href="https://twitter.com/Gregory_Vicent" target="_black">
	    Twitter
	    <br />
	    <FontAwesomeIcon icon={faTwitter} className={ styles.ContactsIcon } />
	  </a>
	  <a className={ styles.ContactsButton } href="https://www.youtube.com/channel/UCSEdxq0M1N_NpoFvbdWOjkg" target="_black">
	    Youtube
	    <br />
	    <FontAwesomeIcon icon={faYoutube} className={ styles.ContactsIcon } />
	  </a>
	</div>
      </div>
    </div>
  )
}
