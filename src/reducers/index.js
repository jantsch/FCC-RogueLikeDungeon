import {combineReducers} from 'redux';
import {player} from './rd-player';
import {map} from './rd-map';
import {enemy} from './rd-enemy';
import {boss} from './rd-boss';
import {config} from './rd-config';

const allReducers = combineReducers({   
    player,
    map,
    enemy,
    boss,
    config
});

export default allReducers