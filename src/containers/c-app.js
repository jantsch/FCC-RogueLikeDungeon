import { connect } from 'react-redux'
import AppUI from './../components/App'
import {setMap} from './../actions/ac-map'
import {setLocationPlayer,setHealth,setWeapon,setDungeon,defend,setXP,resetPlayer} from './../actions/ac-player'
import {setEnemy, resetEnemies,updateEnemy} from './../actions/ac-enemy'
import {setBoss,updateBoss} from './../actions/ac-boss'

export const App = connect(
    state => 
        ({        
           mapa: state.map,
           location: state.player.location,
           weapon: state.player.weapon,
           enemies: state.enemy,
           dungeon: state.player.dungeon,
           health: state.player.health ,
           boss: state.boss                             
        }),
    dispatch => ({
    	 
            setMap(map) {
                dispatch(setMap(map))
            },
            setLocationPlayer(coord){
                dispatch(setLocationPlayer(coord))
            },
            setXP(xp){
                dispatch(setXP(xp))
            },
            defend(attack){
                dispatch(defend(attack))
            },        
            setEnemy(enemy){
                dispatch(setEnemy(enemy))
            },
            updateEnemy(enemy,weapon){
                dispatch(updateEnemy(enemy,weapon))
            },
            resetEnemies(){
                dispatch(resetEnemies())
            },
            setHealth(health){
             dispatch(setHealth(health))
            },
            setWeapon(weapon){
             dispatch(setWeapon(weapon))
            },
            setDungeon(){
             dispatch(setDungeon())
            },
            setBoss(boss){
                 dispatch(setBoss(boss))
            },
            updateBoss(weapon){
                    dispatch(updateBoss(weapon))
            },
            resetPlayer(){
                 dispatch(resetPlayer())
            }

    })
)(AppUI)