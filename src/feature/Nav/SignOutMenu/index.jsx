import React from 'react'
import {Button, Menu} from 'semantic-ui-react'

const SignOutMenu = ({handleSigin, handlerRegister}) => {
  return (
    <div>
    <Menu.Item position="right">

    <Button basic inverted content="Login" onClick={handleSigin} />
    <Button basic inverted content="Register" onClick={handlerRegister} style={{marginLeft: '0.5em'}} />
  </Menu.Item>
    </div>
  )
}

export default SignOutMenu