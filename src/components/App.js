import React, { Component } from 'react';
import { PlayerDetails } from './../containers/c-player-details';
import { Subtitle } from './../containers/c-subtitle';
import { Map } from './../containers/c-map';
import KeyHandler, {KEYDOWN} from 'react-key-handler';
import {cell_type as T,health_level as H , weapons as W, enemy_level as E, boss as B} from './../constants'


class App extends Component {


  componentWillMount(){
        const {setMap} = this.props     
        setMap(this._createMap())
  }

  componentWillUnmoun(){
        const {resetEnemies} = this.props     
        resetEnemies()
  }


   _handleKeypress(event, props) {
      event.preventDefault();   
      const {location} = props 

      let vector = ''
      switch (event.keyCode) {
        case 37: console.log(event.key) // LEFT
            vector = {x: 0 , y: -1}         
          break;
        case 38: console.log(event.key) // UP
            vector = {x: -1 , y: 0}          
          break;
        case 39: console.log(event.key) // RIGHT
            vector = {x: 0 , y: 1}         
          break;
        case 40: console.log(event.key) // DOWN
            vector = {x: 1 , y: 0}        
          break;
        default:  
           break;
      }

    console.log(this._generateMovement(vector,location))
    var nextLocation = this._generateMovement(vector,location)
    this._move(props,nextLocation)
   }


  _generateMovement(vector,location){   
    var nextLocation = {};
    nextLocation.x = location.x + vector.x
    nextLocation.y = location.y + vector.y
    return nextLocation;  
  }
  _move(props,nextLocation){
      const {mapa,location,enemies,weapon,boss,dungeon,health,setMap,setLocationPlayer,resetPlayer,setHealth,updateBoss,setWeapon,setDungeon,updateEnemy,defend,setXP} = props 
    
      switch(mapa[nextLocation.x][nextLocation.y])
      {
        case T.FLOOT:         
          this._updatePlayer(mapa,location,nextLocation,setMap,setLocationPlayer)
          break;
        case T.WALL:      
          break;
        case T.WEAPON:        
          this._updateWeapon(dungeon,setWeapon)
          this._updatePlayer(mapa,location,nextLocation,setMap,setLocationPlayer)
          break;
         case T.HEALTH:
           this._updateHealth(dungeon,setHealth)
           this._updatePlayer(mapa,location,nextLocation,setMap,setLocationPlayer)           
           break;
         case T.EXIT:
            setDungeon()
            setMap(this._createMap())  
          break;
         case T.ENEMY:         
          var enemy = this._findEnemy(nextLocation,enemies)
          var health_enemy = this._attack(enemy,weapon,updateEnemy)  
          if(health_enemy > 0)
          {
            var player_health = this._defend(W[dungeon].attack,defend,health)
            if(player_health <=0)
              {
                alert("GAME OVER");
                this._resetGame(setMap,resetPlayer)
              }
          }
          else
          {
            this._deadEnemy(enemy,dungeon,setXP)
            this._updatePlayer(mapa,location,nextLocation,setMap,setLocationPlayer)  
          }
          break;
        case T.BOSS:
             var health_enemy = this._attackBoss(weapon,updateBoss,boss)
              if(health_enemy > 0)
              {
                 var player_health = this._defend(B.attack,defend,health)
                if(player_health <=0)
                  { 
                    alert("GAME OVER");
                    this._resetGame(setMap,resetPlayer)
                  }

              }
              else
              {
                alert("YOU WON");
                  this._resetGame(setMap,resetPlayer)
              }
          console.log("BOSS");
          break;
        default:
          break;
      }
  }

  _resetGame(setMap,resetPlayer)
  { 
    resetPlayer()
    setMap(this._createMap())
  }

  _attackBoss(weapon,updateBoss,boss)
  {
    boss.health = boss.health - W[weapon].attack
    updateBoss(weapon)
    return boss.health
  }
  _attack(enemy,weapon,updateEnemy){
    enemy.health = enemy.health - W[weapon].attack
    updateEnemy(enemy,weapon)   
    return enemy.health
  }
  _defend(enemy_attack,defend,health){
    health = health - enemy_attack
    defend(enemy_attack)
    return health
  }
  _deadEnemy(enemy,dungeon,setXP){
    setXP(E[dungeon].xp)
  }
  _findEnemy(enemyLocation,enemies){
    return enemies.find((item)=> item.coords.x === enemyLocation.x && item.coords.y === enemyLocation.y)
  }
  _updatePlayer(mapa,location,nextLocation,setMap,setLocationPlayer)
  {
        var newMap = mapa.map((arr,index)=> arr.map((obj,index2)=> obj===T.PLAYER ?  T.FLOOT : obj    ))
        newMap = newMap.map((arr,index)=> arr.map((obj,index2)=> index===nextLocation.x &&  index2===nextLocation.y ?  T.PLAYER : obj    ))
       
        setMap(newMap)
        setLocationPlayer(nextLocation)
  }
  _updateHealth(dungeon,setHealth){
     setHealth(H[dungeon])
   }
  _updateWeapon(dungeon,setWeapon){
     setWeapon(dungeon+1)
   }
  _createMap(width = 48, height = 65, maxRoomSize = 10, minRoomSize = 6, maxHallLength = 5, numRooms = 10, roomChance = .75,numHealth = 3,numEnemy = 5){
     const {setLocationPlayer,setEnemy,dungeon,resetEnemies,setBoss} = this.props
     resetEnemies()

     let map = def_matrix(width,height)
  
     // create first room
      fillRect(map, {x: 10, y: 10}, {x: 5, y: 5}, T.FLOOT);     
       
     // create rooms
      for (let i = 0; i < numRooms; i++) {
        placeRoom(map);
      }
      
     // Player
      placePlayer(map)


     // Health
      for (let i = 0; i < numHealth; i++)  
        placeHealth(map)
     
     // Weapon
      placeWeapon(map)

     // Enemy
      for (let i = 0; i < numEnemy; i++)  
      placeEnemy(map)

    

    if(dungeon === 4)
       placeBoss(map)
     else
       placeExit(map)

    return map;

    function fillRect(map, startCoord, size, fillVal) {
        for (let i = startCoord.x; i < startCoord.x + size.x; i++) {
          map[i].fill(fillVal, startCoord.y, size.y + startCoord.y);
        }
        return map;
    }

    function placePlayer(map)
    {
        var coords = _getEmptyCoords(map)
        map[coords.x][coords.y] = T.PLAYER
        setLocationPlayer(coords)
    }
    function placeBoss(map)
    {
        var coords = _getEmptyCoords(map)
        map[coords.x][coords.y] = T.BOSS
        setBoss({coords, health: B.health})
    }
    function placeHealth(map) {

      var coords = _getEmptyCoords(map)
        map[coords.x][coords.y] = T.HEALTH
    }
    function placeEnemy(map) {

      var coords = _getEmptyCoords(map)
      map[coords.x][coords.y] = T.ENEMY
      setEnemy({coords: coords, health: E[dungeon].health})
      
    }
    function placeExit(map) {

      var coords = _getEmptyCoords(map)
        map[coords.x][coords.y] = T.EXIT
      
    }
    function placeWeapon(map) {

      var coords = _getEmptyCoords(map)
        map[coords.x][coords.y] = T.WEAPON
      
    }


    function _getEmptyCoords(mapa){  
        let coords, x, y;
        do {
          x = Math.floor(Math.random() * mapa.length);
          y = Math.floor(Math.random() * mapa[0].length);
          if (mapa[x][y] === T.FLOOT) {
            coords = {x: x, y: y};
          }
        } while (!coords);
       return coords;
      }

    function placeRoom(map) {
        let wall, width, height, startX, startY, coords, numClear;
        while (true) {          
          numClear = 0;
          wall = findWall(map);        
          coords = wall.coords;
          width = Math.floor((Math.random() * (maxRoomSize - minRoomSize)) + minRoomSize);
          height = Math.floor((Math.random() * (maxRoomSize - minRoomSize)) + minRoomSize);
          switch (wall.openDir) {
            case 'right': 
              startX = coords.x - width;
              startY = (coords.y - Math.floor(height / 2)) + getDoorOffset(height);
              break;
            case 'left':  
              startX = coords.x + 1;
              startY = (coords.y - Math.floor(height / 2)) + getDoorOffset(height);
              break;
            case 'top': 
              startX = (coords.x - Math.floor(width / 2)) + getDoorOffset(width);
              startY = coords.y + 1;
              break;
            case 'bottom':  
              startX = (coords.x - Math.floor(width / 2)) + getDoorOffset(width);
              startY = coords.y - height;
              break;
            default:
              break;
          }
          // Exit if room would be outside matrix
          if (startX < 0 || startY < 0 || startX + width >= map.length || startY + height >= map[0].length) {
            continue;
          }
          // check if all spaces are clear
          for (let i = startX; i < startX + width; i++) {
            if (map[i].slice(startY, startY + height).every(tile => tile === T.WALL)) {
              numClear++;
            }
          }
          if (numClear === width) {
            fillRect(map, {x: startX, y: startY}, {x: width, y: height}, T.FLOOT);
            map[coords.x][coords.y] = T.FLOOT;
            return map;
          }
        }
            function getDoorOffset(length) {
          return Math.floor((Math.random() * length) - Math.floor((length - 1 ) / 2));
        }
      }


        // Loops until it finds a wall tile
      function findWall(map) {
        const coords = {x: 0, y: 0};
        let wallDir = false;
        do {
          coords.x = Math.floor(Math.random() * map.length);
          coords.y = Math.floor(Math.random() * map[0].length);
          wallDir = isWall(map, coords);
        } while (!wallDir);
        
        return {coords: coords, openDir: wallDir};
      }

      // Takes a map matrix and a coordinate object
      // Returns false if not a wall, otherwise the direction of the open tile
      function isWall(map, coords) {
        // return false if tile isn't wall
        if (map[coords.x][coords.y] !== T.WALL) { return false; }
        // left is open
        if (typeof map[coords.x - 1] !== 'undefined' && map[coords.x - 1][coords.y] === T.FLOOT) {
          return 'left';
        }
        // right is open
        if (typeof map[coords.x + 1] !== 'undefined' && map[coords.x + 1][coords.y] === T.FLOOT) {
          return 'right';
        }
        // top is open
        if (map[coords.x][coords.y - 1] === T.FLOOT) {
          return 'top';
        }
        // bottom is open
        if (map[coords.x][coords.y + 1] === T.FLOOT) {
          return 'bottom';
        }
        
        return false;
      }
    
    function def_matrix(m, n) {
      return Array.from({
        // generate array of length m
        length: m
        // inside map function generate array of size n
        // and fill it with `0`
      }, () => new Array(n).fill(T.WALL));
    }

  }




  render() {    
    return (
      <div className="App">
        <KeyHandler keyEventName={KEYDOWN} keyValue="ArrowRight" onKeyHandle={(event) => this._handleKeypress(event, this.props)} />
        <KeyHandler keyEventName={KEYDOWN} keyValue="ArrowLeft" onKeyHandle={(event) => this._handleKeypress(event, this.props)} />
        <KeyHandler keyEventName={KEYDOWN} keyValue="ArrowUp" onKeyHandle={(event) => this._handleKeypress(event, this.props)} />
        <KeyHandler keyEventName={KEYDOWN} keyValue="ArrowDown" onKeyHandle={(event) => this._handleKeypress(event, this.props)} />
        
        <div className="App-header">
          <h2>FCC- RogueLike</h2>
          <p> Kill the boss in dungeon 4 </p>
        </div>      
        <PlayerDetails />
        <Map />
        <Subtitle />        
      </div>
    );
  }
}

export default App;
