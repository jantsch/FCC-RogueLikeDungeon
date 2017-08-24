import {action_types as C }  from '../constants'
const defaultState = {
        "health": 100,
        "weapon": 0,        
        "XP": 0,       
        "dungeon": 0 
}
export const player = (state = {}, action) => {  
    switch (action.type) { 
    	 case C.SET_HEALTH:           
            return  { 
                ...state,
                health: action.health + state.health                            
            }
         case C.SET_WEAPON:                         
             return  {  
                ...state,
                weapon: action.weapon            
            }     
         case C.SET_LEVEL:           
            return  {              
                 ...state,
                 level: state.level + 1                            
            }
        case C.SET_XP:
            return { 
                ...state,
                XP: action.XP + state.XP
            }
        case C.SET_DUNGEON:{            
            return { 
                ...state,
                dungeon: state.dungeon + 1     
            }
        }
        case C.SET_LOCATION_PLAYER:           
            return {
                ...state,
                location: action.coord

            }
         case C.DEFEND:           
            return {
                ...state,
                health: state.health - action.attack
            }
        case C.RESET_PLAYER:           
            return defaultState
        default :
            return state
    }

}