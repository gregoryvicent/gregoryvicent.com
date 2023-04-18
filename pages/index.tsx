import { useState } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import HeaderMovile from '../components/HeaderMovile'
import Modal from '../components/Modal'
import Presentation from '../components/Presentation'
import Contacts from '../components/Contacts'

import styles from '../styles/index.module.css'

export default function index(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    if(isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <>
      <Head>
	<title>Gregory Vicent</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Chivo+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <Modal 
	isOpen={ isOpen }
	handleClick={ handleClick }
      />
      <main className={styles.Main} >
	<Header />	
	<HeaderMovile handleClick={ handleClick } />
	<section>
	  <Presentation />
	</section>
	<section>
	  <Contacts />
	</section>
      </main>
    </>
  )
}
