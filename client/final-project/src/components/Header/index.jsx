import React from 'react'
import styles from './header.module.css'
import Container from '../Grid/Container'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
  return (
    <>
    <Container>
    <header>
        <div className={styles.navbar}>
            <div className="logo">
                <h2><Link><span style={{color:"black"}}>COLO</span><span style={{color:"red"}}>SHOP</span></Link></h2>
            </div>
            <div className={styles.links}>
                <ul className={styles.link}>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/shop"}>SHOP</Link></li>
                    <li><Link to={"/pages"}>PAGES</Link></li>
                    <li><Link to={"/blog"}>BLOG</Link></li>
                    <li><Link to={"/contact"}>CONTACT</Link></li>
                </ul>
            <div className={styles.icons}>
                <SearchIcon/>
                <PersonIcon/>
                <ShoppingCartIcon/>
            </div>
            </div>
        </div>
    </header>
    </Container>
    </>
  )
}

export default Header