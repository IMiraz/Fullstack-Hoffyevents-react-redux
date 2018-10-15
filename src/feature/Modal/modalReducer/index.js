import {CLOSE_MODAL, OPEN_MODAL} from '../modalActionsType'
import {createReducer} from '../../../common/util/reducerUtil'

const initialState = null;

export const openModal = (state, payload) => {

    const {modalType, modalProps} = payload;
    
    return {
         modalType,
         modalProps
    }

}

export const closeModal = (state, payload) => {
     return null
}

export default createReducer(initialState, {
     [OPEN_MODAL]:openModal,
     [CLOSE_MODAL]:closeModal
})