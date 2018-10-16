import React from 'react'
import {Dimmer, Loader} from 'semantic-ui-react'

const Loader = ({intverted}) =>  {
  return (
    <Dimmer intverted={intverted} active={true}>
      <Loader content='Loading ....'/>
    </Dimmer>
  )
}

export default Loader
