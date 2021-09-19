// React.js and Next.js imports
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// My components imports
import Header from './header'
import Nav from './nav'
// Styles imports
import style from '../styles/layout.module.css'
import styles from '../styles/nav.module.css'
// Layout component that represent all components same in each part of the website
export default function Layout({ children, home }) {
  const [classNav, setClassNav] = useState( styles.nav_item )
  const [classNavBox, setClassNavBox] = useState( "" )
  const [classButton, setClassButton] = useState( "" )
  const [textButton, setTextButton] = useState( 
    <Image 
      src="/menu.svg"
      width="30px"
      height="30px"
      alt="Burger Menu"
    /> 
  )
  // Menu button controller on movil version 
  function handleClick() {
    classNavBox !== style.active
      ? setClassNavBox( style.active ) 
      : setClassNavBox( "" )

    classButton !== style.is_active_button 
      ? setClassButton( style.is_active_button ) 
      : setClassButton( "" )

    textButton !== "⇑"
      ? (setTextButton("⇑")) 
      : (setTextButton(  
        <Image 
          src="/menu.svg"
          width="30px"
          height="30px"
          alt="Burger Menu"
        />
      )
    )
  }
  // Screen width recognition
  useEffect(() => {
    window.screen.width < 800 
        ? setClassNav( styles.nav_active ) 
        : setClassNav( styles.nav_item )

    window.addEventListener("resize", (e) => {
      e.target.screen.width < 800 
        ? setClassNav( styles.nav_active ) 
        : setClassNav( styles.nav_item )
    })
  })

  return(
    <div className={style.container}> 
      <Head>
        <link rel="icon" href="/LOGO_negative.svg" />
        <link rel="canonical" href="https://gregoryvicent.com/"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />     
        <meta name="author" content="Gregory Vicent" />
      </Head>

      <Header className={ style.header } />

      <main className={ style.main }>{ children }</main>

      <div className={ `${style.nav} ${classNavBox}` } >
        <Nav className={ classNav } />
      </div>

      <button onClick={ handleClick } id="menu-button" className={ `${style.menu_button} ${classButton}` }>
        { textButton }
      </button>
      
      { !home ? (
          <Link href="/">
            <p className={ style.back_home } >&#8656; Home</p>
          </Link>
        ) : (
          <div></div>          
        )
      }
    </div>
  )
}
