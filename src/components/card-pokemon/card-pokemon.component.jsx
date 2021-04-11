import { Grid, Paper } from '@material-ui/core';
import React from 'react'

import {types} from './../../constants/data-pokemon';

import './card-pokemon.style.scss'

const CardPokemon = ({img,nombre,tipo}) => {
    return (
        <div className="card">
            <img src={img}></img>
            <h2>{nombre}</h2>
            
            <div className="tipos">
            
                {types.map((type) => 

                    
                    { return tipo.map((tipo) => 

                            
                        {return type._id === tipo &&

                            <Grid xs={6} className={`tipo-card ${type.nombre} ` }>
                                {type.nombre}
                            </Grid>
                        }
                    )}
                    
                )}


            
            </div>
        </div>
    )
}

export default CardPokemon;