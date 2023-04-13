import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
           <Link to="pages/admin/ManageProducts">Admin</Link>
           <br />
           <Link to="/">Home</Link>
    </>
  )
}

export default Nav