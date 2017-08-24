import { connect } from 'react-redux'
import MapUI from './../components/ui-map'

export const Map = connect(
    state => 
        ({        
           mapa: state.map,
           toggleDarkness: state.config.toggleDarkness,
           playerLocation: state.player.location                           
        }),
    null
)(MapUI)