import {action_types as C }  from './../constants'

 const setMap = (map) =>
 ({
        type: C.SET_MAP,
        map
 })
 const setLocationWeapon = (coord) =>
 ({
        type: C.SET_LOCATION_WEAPON,
        coord
 })
 const setLocationHealth = (coord) =>
 ({
        type: C.SET_LOCATION_HEALTH,
        coord
 })
 const setLocationExit = (coord) =>
 ({
        type: C.SET_LOCATION_EXIT,
        coord
 })
 const setLocationEnemy = (coord) =>
 ({
        type: C.SET_LOCATION_ENEMY,
        coord
 })
 export{setMap,setLocationWeapon,setLocationHealth,setLocationExit,setLocationEnemy}