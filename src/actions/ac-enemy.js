import {action_types as C }  from './../constants'

 const setEnemy = (enemy) =>
 ({
        type: C.SET_ENEMY,
        enemy
 })

 const resetEnemies = () =>
 ({
        type: C.RESET_ENEMIES
       
 })
  const updateEnemy = (enemy,weapon) =>
 ({
        type: C.UPDATE_ENEMY,
        enemy,
        weapon
       
 })



 export {setEnemy,resetEnemies,updateEnemy}