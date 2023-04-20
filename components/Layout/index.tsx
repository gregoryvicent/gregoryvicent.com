import { useState } from 'react'
import Head from 'next/head'

import Header from '../Header'
import HeaderMovile from '../HeaderMovile'
import Modal from '../Modal'

import ChildrenInterface from '../../interfaces/childrenInterface'

import styles from '../../styles/Layout.module.css'

const Layout: React.FC<ChildrenInterface> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleClick(): void {
    if(isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return(
    <>
      <Head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Chivo+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <Modal 
	isOpen={ isOpen }	
	handleClick={ handleClick }
      />
      <main className={ styles.LayoutMain } >
	<Header />      
	<HeaderMovile 
	  handleClick={ handleClick }
	/> 
	{ children }
        <footer className={ styles.LayoutFooter }>
	  <p className={ styles.LayoutEmail }>gregoryvicent.dev@gmail.com</p>
        </footer>
      </main>
    </>
  )
}

export default Layout
