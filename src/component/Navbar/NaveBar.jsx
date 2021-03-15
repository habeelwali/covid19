import React from 'react';



import {Link} from 'react-router-dom'
import  styles from './NaveBar.module.css';


export default function NaveBar() {


  return (
   
          <nav className={styles.container}>
         

          <li className={styles.li}>
            <Link className={styles.btn} to="/" >
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.btn} to="/cases">
              Cases
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.btn} to="/vecine">
              vaccine
            </Link>
          </li>
        
          </nav>
     
  
  );
  }
