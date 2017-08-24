const action_types = {
    SET_HEALTH: "SET_HEALTH",
    SET_WEAPON: "SET_WEAPON",   
    SET_LEVEL: "SET_LEVEL",   
    SET_XP: "SET_XP",
    SET_DUNGEON: "SET_DUNGEON",
    SET_MAP: "SET_MAP",
    SET_LOCATION_PLAYER: "SET_LOCATION_PLAYER",
    SET_LOCATION_WEAPON: "SET_LOCATION_WEAPON",
    SET_LOCATION_HEALTH: "SET_LOCATION_HEALTH",
    SET_LOCATION_EXIT: "SET_LOCATION_EXIT",
    SET_LOCATION_ENEMY: "SET_LOCATION_ENEMY",
    SET_ENEMY: "SET_ENEMY",
    RESET_ENEMIES: "RESET_ENEMIES",
    UPDATE_ENEMY: "UPDATE_ENEMY",
    DEFEND: "DEFEND",
    SET_BOSS: "SET_BOSS",
    UPDATE_BOSS: "UPDATE_BOSS",
    RESET_PLAYER: "RESET_PLAYER",
    TOGGLE_DARKNESS: "TOGGLE_DARKNESS"
}
const weapons = [
    { 
        "name": "STICK",
        "attack": 7
    },
    { 
        "name": "KATANA",
        "attack": 16
    },
    { 
        "name": "BRASS_KNUCKLES",
        "attack": 17
    },
    { 
        "name": "REAPER",
        "attack": 22
    },
    { 
        "name": "SERRATED_DAGGER",
        "attack": 26
    },
    { 
        "name": "LARGE_TROUT",
        "attack": 30
    }
]
const map_cell_to_class =[
    "floot",
    "wall",
    "weapon",
    "health",
    "exit",
    "player",
    "enemy",
    "boss",
    "shade"
] 
const cell_type ={
    FLOOT: 0,
    WALL: 1,
    WEAPON:2,
    HEALTH:3,
    EXIT:4,
    PLAYER:5,
    ENEMY:6,
    BOSS: 7,
    SHADE:8
}
const enemy_level = [
    {
      health: 10,
      attack: 7,
      xp: 10
    },
    {
      health: 20,
      attack: 12,
      xp: 20
    },
    {
      health: 30,
      attack: 17,
      xp: 30
    },
    {
      health: 40,
      attack: 21,
      xp: 40
    },
    {
      health: 50,
      attack: 25,
      xp: 50
    }
]
const health_level = [
    30,
    20,
    10,
    5,
    2
]
const level_player =[
    50,
    120,
    170,
    230,
    300  
]
const boss = {  
  health: 200,
  attack: 40
}
const movements = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,   
    ARROW_RIGHT: 39,   
    ARROW_DOWN: 40,

}

export {
        action_types,
        weapons,
        map_cell_to_class,
        cell_type, 
        enemy_level, 
        boss,
        health_level,
        level_player,
        movements
    }