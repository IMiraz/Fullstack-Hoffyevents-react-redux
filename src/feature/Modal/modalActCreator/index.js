
import {OPEN_MODAL, CLOSE_MODAL} from '../modalActionsType'


export const openModal = (modalType, modalProps) => {
    return {
        type:OPEN_MODAL,
        payload:{
             modalType,
             modalProps
        }
    }


}

    export const closeModal= () => {
         return {
             type:CLOSE_MODAL
         }
    }



