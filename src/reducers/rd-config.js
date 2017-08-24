import {action_types as C}  from '../constants'

export const config = (state = {}, action) => {  
    switch (action.type) { 
    	case C.TOGGLE_DARKNESS:           
            return {
                toggleDarkness: !state.toggleDarkness
            }
       
        default :
            return state
    }

}