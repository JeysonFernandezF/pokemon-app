import React from 'react'

import './pokedex.style.scss';

import {pokemon} from './../../constants/data-pokemon';
import CardPokemon from '../../components/card-pokemon/card-pokemon.component';
import { Grid, Paper } from '@material-ui/core';

class Pokedex extends React.Component {
    constructor(){
        super();
    }



    render(){

        let formasEvolutivas = pokemon.map((pokemon) => {
            return pokemon.formaEvolutiva
        })

        const formasEvolutivasFiltradas = [];
        formasEvolutivas.forEach((item)=>{
            //pushes only unique element
            if(!formasEvolutivasFiltradas.includes(item)){
                formasEvolutivasFiltradas.push(item);
            }
        })

        return (
            <>
    
                {formasEvolutivasFiltradas.map((forma) => (

                    <div className="form-evolutiva">

                        <h2>N°: {forma}</h2>
                        <div className="pokemon">

                        {  pokemon.map( ({_id, formaEvolutiva ,...otherPokemonProps}) => 
                            {return formaEvolutiva === forma &&
                                <Grid item xs={3}>
                                    <Paper>
                                        <CardPokemon key={_id} {...otherPokemonProps} />
                                    </Paper>
                                </Grid>
                                
                            }
                            
                        )}
                        </div>
                    </div>



                ))}
    
    
            </>
        )
    }
}

export default Pokedex;
