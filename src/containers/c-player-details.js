import { connect } from 'react-redux'
import PlayerDetailsUI from './../components/ui-player-details'
import {toggleDarkness} from './../actions/ac-config'

export const PlayerDetails = connect(
    state => 
        ({        
           health: state.player.health,
           weapon: state.player.weapon,
           xp: state.player.XP,
           dungeon: state.player.dungeon                      
        }),
    dispatch =>({

    		toggleDarkness() {
                dispatch(toggleDarkness())
            }


    })
)(PlayerDetailsUI)