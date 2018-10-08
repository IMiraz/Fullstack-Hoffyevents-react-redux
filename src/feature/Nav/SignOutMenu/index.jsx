import React from 'react'
import {Button, Menu} from 'semantic-ui-react'

const SignOutMenu = ({handleSigin}) => {
  return (
    <div>
    <Menu.Item position="right">

    <Button basic inverted content="Login" onClick={handleSigin} />
    <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
  </Menu.Item>
    </div>
  )
}

export default SignOutMenu