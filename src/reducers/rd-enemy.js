import {action_types as C, weapons as W}  from '../constants'

export const enemy = (state = {}, action) => {  
    switch (action.type) { 
    	case C.SET_ENEMY:           
            return [
            	...state,
            	action.enemy
            ]   
        case C.RESET_ENEMIES:           
            return [] 
        case C.UPDATE_ENEMY:           
            return state.map((item) => item.coords.x === action.enemy.coords.x && item.coords.y === action.enemy.coords.y ?  {...item, health : item.health - W[action.weapon].attack}: item )        
        default :
            return state
    }

}