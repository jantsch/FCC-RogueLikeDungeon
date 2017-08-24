import {action_types as C }  from './../constants'

const setHealth = (health) =>
   ({
        type: C.SET_HEALTH,
        health: health
    })
const setWeapon = (weapon) =>
   ({
        type: C.SET_WEAPON,
        weapon: weapon
    })
const setLevel = () =>
   ({
        type: C.SET_LEVEL
    })
const setXP = (XP) =>
   ({
        type: C.SET_XP,
        XP: XP
    })
const setDungeon = () =>
   ({
        type: C.SET_DUNGEON
    })
const setLocationPlayer = (coord) =>
 ({
        type: C.SET_LOCATION_PLAYER,
        coord
 })

const defend= (attack) =>
 ({
        type: C.DEFEND,
        attack
 })
 const resetPlayer= () =>
 ({
        type: C.RESET_PLAYER
        
 })


 export {setHealth,setWeapon,setLevel,setXP,setDungeon,setLocationPlayer,defend,resetPlayer}