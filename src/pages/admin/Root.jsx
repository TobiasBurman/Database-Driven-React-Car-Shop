import React from 'react'

import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      

        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default Root