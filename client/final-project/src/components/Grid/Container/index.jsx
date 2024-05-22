import React from 'react'

const Container = ({children} )=> {
  return (
    <>
    <div style={{width:"75%", margin:"0 auto"}} className="container">{children}</div>
    </>
  )
}

export default Container