import React from 'react';
import {Row,Col,Button} from 'react-bootstrap'
import {weapons as W, level_player as L} from './../constants'



const playerDetails = ({health,weapon,xp,dungeon,toggleDarkness}) => (
	<Row>
		<Col  sm={12} md={12}> 
			<b>Health:</b> {health}     
			<b>Weapon:</b> {W[weapon].name}
			<b>Attack:</b> {W[weapon].attack}
			<b>Level:</b> { L[0] >= xp ? 1 : (L[1] >= xp? 2 : (L[2] >= xp? 3 : (L[3] >= xp? 4 : 5)) ) }
			<b>Next Level:</b> {L[0] >= xp ? L[0] - xp : (L[1] >= xp? L[1] - xp : (L[2] >= xp? L[2] - xp : (L[3] >= xp? L[3] - xp : 0)) )      } XP  
			<b>Dungeon:</b> {dungeon}
			<Button bsStyle="primary" onClick={() => toggleDarkness()} > Toogle Darkness </Button>

		</Col>
		
	</Row>


)



export default playerDetails