import {action_types as C, weapons as W}  from '../constants'

export const boss = (state = {}, action) => {  
    switch (action.type) { 
    	case C.SET_BOSS:           
            return action.boss
        case C.UPDATE_BOSS:           
            return {
                ...state,
                health: state.health - W[action.weapon].attack
            }
        default :
            return state
    }

}