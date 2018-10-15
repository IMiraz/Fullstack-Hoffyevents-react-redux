import React from 'react'
import {connect} from 'react-redux'
import TestModal from '../testModal'

const modalLookup = {
    TestModal
}

const mapState = (state) => ({
     currentModal:state.modals
})

 const ModalManager = ({currentModal}) => {
      let renderdModal;
      if(currentModal) {
          const {modalType, modalProps} = currentModal;
          const ModalComponent = modalLookup[modalType];
          renderdModal =<ModalComponent {...modalProps}/> 
      }
  return  <span>{renderdModal}</span>
}

export default connect(mapState) (ModalManager)
