import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'//from static
import styles from '../../styles/styles'

//Navbar Component... if its active.. it will be highlghted in green (found in static)
const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.normalFlex}`} key="navbar">
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar;