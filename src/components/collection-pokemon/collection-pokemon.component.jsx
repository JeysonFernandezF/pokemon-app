import { Grid, Paper } from '@material-ui/core';
import React from 'react'


import CardPokemon from '../../components/card-pokemon/card-pokemon.component';
import NotFound from '../not-found/not-found.component';

const CollectionPokemon = ({listaFiltrada}) => (
    
    
    <Grid container spacing={2}>
     {listaFiltrada.length > 0 ?
        listaFiltrada.map( ({_id, ...otherPokemonProps}) => (
            <Grid item xs={3}>
                <Paper>
                    <CardPokemon key={_id} {...otherPokemonProps} />
                </Paper>
             </Grid>
            
        ))
        :
            <NotFound />
        
    }
    </Grid>
    
)


export default CollectionPokemon;