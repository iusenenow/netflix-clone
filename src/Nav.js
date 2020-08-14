import React, { useEffect, useState } from 'react'

const Nav = () => {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => window.removeEventListener('scroll')
  }, [])

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className="nav-logo" />
      <img src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" alt="Netflix Avatar" className="nav-avatar" />
    </div>
  )
}

export default Nav
