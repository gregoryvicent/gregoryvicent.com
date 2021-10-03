// React.js and Next.js imports
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// My components imports
import Header from './header'
import NavDesktop from './navDesktop'
import NavMovil from './navMovil'
// Styles imports
import style_layout from '../styles/layout.module.css'
// Layout component that represent all components same in each part of the website
export default function Layout({ children, home }) {
  const [screenDesktop, setScreenDesktop] = useState( true )
  const [switchNav, setSwitchNav] = useState( style_layout.nav_hidden )
  const [isActive, setIsActive] = useState( "" )

  const handleNav = () => {
    switchNav !== style_layout.nav_hidden
      ? setSwitchNav( style_layout.nav_hidden )
      : setSwitchNav( "" )

    isActive !== "is-active"
      ? setIsActive( "is-active" )
      : setIsActive( "" )
  }

  useEffect(() => {
    const screenUpdate = () => {
      window.innerWidth <= 700
        ? setScreenDesktop( false )
        : setScreenDesktop( true )
    }

    screenUpdate()

    window.addEventListener("resize", screenUpdate)

    return () => {
      window.removeEventListener("resize", screenUpdate)
    }
  }, [])
  
  return(
    <div > 
      <div className={`${style_layout.container}`}>

        <Head>
          <link href="dist/hamburgers.css" rel="stylesheet" />
          <link rel="icon" type="image/svg+xml" href="/LOGO_negative.svg" />
          <link rel="canonical" href="https://gregoryvicent.com/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
          
          <meta charSet="UTF-8" />
          <meta name="robots" content="NOODP" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />     
          <meta name="author" content="Gregory Vicent" />
        </Head>
  
        <div className={ style_layout.sub_container }>

          <Header className={ style_layout.header } />
    
          <main className={ style_layout.main }>{ children }</main>
        </div>

      { 
        screenDesktop
          ? (
              <div className={ `${style_layout.nav} ${switchNav}` } >
                <NavDesktop handleNav={handleNav} isActive={isActive} />
              </div>
            )
            : (
                <div>
                  <NavMovil /> 
                </div>
              )
        
      }
      </div>
      
      { !home ? (
          <Link href="/">
            <p className={ style_layout.back_home } >&#8656; Home</p>
          </Link>
        ) : (
          <div></div>          
        )
      }
    </div>
  )
}
