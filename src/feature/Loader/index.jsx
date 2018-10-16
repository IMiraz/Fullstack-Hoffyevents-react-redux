import React from 'react'
import {Dimmer, Loader} from 'semantic-ui-react'

const Loader = ({intverted}) =>  {
  return (
    <Dimmer >
      <Loader content='Loading ....'/>
    </Dimmer>
  )
}

export default Loader
