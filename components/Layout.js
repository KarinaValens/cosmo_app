import styles from '../styles/Home.module.css'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'


export default function Layout({children}) {
    //the children props are the elements inside the -app.js
  return (
    <>
    {/* <Header/> */}
    {children}
    <Footer/>
    </>
  )
}

