import {action_types as C, cell_type  as T }  from '../constants'

export const map = (state = {}, action) => {  
    switch (action.type) { 
    	 case C.SET_MAP:           
            return action.map        
         case C.SET_LOCATION_WEAPON:           
            return state.map((arr,index) => arr.map((obj,index2)=> action.coord.x === index && action.coord.y === index2 ? T.WEAPON  : obj))
         case C.SET_LOCATION_HEALTH:           
            return state.map((arr,index) => arr.map((obj,index2)=> action.coord.x === index && action.coord.y === index2 ? T.HEALTH  : obj))
         case C.SET_LOCATION_EXIT:           
            return state.map((arr,index) => arr.map((obj,index2)=> action.coord.x === index && action.coord.y === index2 ? T.EXIT  : obj))
         case C.SET_LOCATION_ENEMY:           
            return state.map((arr,index) => arr.map((obj,index2)=> action.coord.x === index && action.coord.y === index2 ? T.ENEMY  : obj))
       
        default :
            return state
    }

}