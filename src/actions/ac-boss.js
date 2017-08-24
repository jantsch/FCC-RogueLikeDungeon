import {action_types as C }  from './../constants'

 const setBoss = (boss) =>
 ({
        type: C.SET_BOSS,
        boss     
 })
  const updateBoss = (weapon) =>
 ({
        type: C.UPDATE_BOSS,
        weapon     
 })



 export {setBoss,updateBoss}