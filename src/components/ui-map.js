
import React,{Component} from 'react';
import {map_cell_to_class as M, cell_type as T} from './../constants'


const Cell = ({type,indexColumn,indexRow}) => (	
	<span id={indexRow + "x"+indexColumn} className={"tile " + M[type]}></span>
)

class Map extends Component 
{
	render(){
		const {mapa,playerLocation,toggleDarkness} = this.props
		return(		
			(toggleDarkness ===false || playerLocation === null ?
					<div className="board-box">
						{mapa.map( (array,index) => array.map((obj,index2)=> <Cell  type={obj} indexRow={index2} indexColumn={index} key={index2} /> ) )}
					</div>
				:
					<div className="board-box">
						{mapa.map( (array,index) => array.map(
										(obj,index2) => (((playerLocation.y - index2)  <=6 &&  (playerLocation.y - index2)  >= -6) && 
														((playerLocation.x - index)  <=6 &&  (playerLocation.x - index)  >= -6)) && 
														!((playerLocation.y - index2)  ===4 && playerLocation.x - index  ===5) && 
														!((playerLocation.y - index2)  ===5 && playerLocation.x - index  ===4) && 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===6) && 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===5)&& 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===4)&& 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===3)&& 
														!((playerLocation.y - index2)  ===5 && playerLocation.x - index  ===6)&& 
														!((playerLocation.y - index2)  ===4 && playerLocation.x - index  ===6)&& 
														!((playerLocation.y - index2)  ===3 && playerLocation.x - index  ===6)&& 
														!((playerLocation.y - index2)  ===5 && playerLocation.x - index  ===5) &&

														!((playerLocation.y - index2)  ===-4  && playerLocation.x - index  ===5) && 
														!((playerLocation.y - index2)  ===-5 && playerLocation.x - index  ===4) && 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===6) && 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===5)&& 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===4)&& 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===3)&& 
														!((playerLocation.y - index2)  ===-5 && playerLocation.x - index  ===6)&& 
														!((playerLocation.y - index2)  ===-4 && playerLocation.x - index  ===6)&& 
														!((playerLocation.y - index2)  ===-3 && playerLocation.x - index  ===6)&& 
														!((playerLocation.y - index2)  ===-5 && playerLocation.x - index  ===5)&&

														!((playerLocation.y - index2)  ===4 && playerLocation.x - index  ===-5) && 
														!((playerLocation.y - index2)  ===5 && playerLocation.x - index  ===-4) && 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===-6) && 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===-5)&& 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===-4)&& 
														!((playerLocation.y - index2)  ===6 && playerLocation.x - index  ===-3)&& 
														!((playerLocation.y - index2)  ===5 && playerLocation.x - index  ===-6)&& 
														!((playerLocation.y - index2)  ===4 && playerLocation.x - index  ===-6)&& 
														!((playerLocation.y - index2)  ===3 && playerLocation.x - index  ===-6)&& 
														!((playerLocation.y - index2)  ===5 && playerLocation.x - index  ===-5)&&

														!((playerLocation.y - index2)  ===-4 && playerLocation.x - index  ===-5) && 
														!((playerLocation.y - index2)  ===-5 && playerLocation.x - index  ===-4) && 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===-6) && 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===-5)&& 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===-4)&& 
														!((playerLocation.y - index2)  ===-6 && playerLocation.x - index  ===-3)&& 
														!((playerLocation.y - index2)  ===-5 && playerLocation.x - index  ===-6)&& 
														!((playerLocation.y - index2)  ===-4 && playerLocation.x - index  ===-6)&& 
														!((playerLocation.y - index2)  ===-3 && playerLocation.x - index  ===-6)&& 
														!((playerLocation.y - index2)  ===-5 && playerLocation.x - index  ===-5)
										? 
									 		<Cell  type={obj} indexRow={index2} indexColumn={index} key={index2} /> 
									 	: 
									 		<Cell  type={T.SHADE} indexRow={index2} indexColumn={index} key={index2} /> ))}
					</div>)

		 
		
	)}
}

export default Map