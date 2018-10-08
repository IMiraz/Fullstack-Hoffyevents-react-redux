import React from 'react'
import {Button, Menu} from 'semantic-ui-react'

const SignOutMenu = () => {
  return (
    <div>
    <Menu.Item position="right">
    <Button basic inverted content="Login" />
    <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
  </Menu.Item>
    </div>
  )
}

export default SignOutMenu