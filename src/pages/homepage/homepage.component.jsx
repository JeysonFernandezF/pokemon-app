    import React from 'react'

    import './homepage.style.scss';

    import CollectionFilterItem from '../../components/collection-filter-item/collection-filter-item.component';

    import {types, pokemon} from './../../constants/data-pokemon';

    import CollectionPokemon from '../../components/collection-pokemon/collection-pokemon.component';
    import NotFound from '../../components/not-found/not-found.component';
    import { Grid, Paper } from '@material-ui/core';


    class HomePage extends React.Component {
        
        constructor(){
            super();

            this.state={
                listaPokemon: pokemon,
                tipos: types,
                filtros: []
            }
            
        }
        
        agregarFiltro = (id) =>{
            
            let filtrosActuales = this.state.filtros;
            if(filtrosActuales.indexOf(id) === -1){
                filtrosActuales.push(id);
            }else{
                filtrosActuales = filtrosActuales.filter( value => value !== id);
            }
            

            let tipoActuales = this.state.tipos;

            tipoActuales.forEach((tipo) => {
                if(tipo._id === id){
                    tipo.selected = !tipo.selected;
                }
            })


            this.setState({
                tipos: tipoActuales
            })

            this.setState({
                filtros: filtrosActuales
            })
        }
        
        render(){

            const {listaPokemon,tipos,filtros} = this.state;
            const listaFiltrada = [];
            listaPokemon.forEach( pokemon =>{

                let corresponde = true;
                filtros.forEach( filtro =>{
                    
                    if(pokemon.tipo.indexOf(filtro) === -1){
                        corresponde = false;
                    }
                })

                if(corresponde){
                    listaFiltrada.push(pokemon)
                }


            })

            return (
                <Grid container  className="homepage">

                    <Grid item xs={3} className="lista-tipos">
                        <h2>Busqueda por Tipo</h2>
                        <Grid>
                            {tipos.map(({_id, ...otherTiposProps}) => (
                                
                                    <CollectionFilterItem  key={_id} agregarFiltro={this.agregarFiltro} id={_id} {...otherTiposProps}/>
                                

                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={8} className="collection-pokemon">

                        <Paper >
                            <div className="informacion">
                                <h2>
                                    Busqueda
                                </h2>

                                <Grid container  className="filtrados">
                                    {tipos.map(({_id, selected, ...otherTiposProps}) => (
                                        
                                        <>
                                        { selected &&
                                            

                                            <Grid item xs={2}>
                                                
                                                    <CollectionFilterItem  key={_id} agregarFiltro={this.agregarFiltro} id={_id} selected={selected} {...otherTiposProps}/>
                                                
                                            </Grid>
                                        }
                                        </>
                                    )
                                            
                                        )}
                                </Grid>
                                
                            </div>
                        </Paper>
                        <div>
                            <CollectionPokemon  listaFiltrada={listaFiltrada} />
                        </div>


                        
                    </Grid>

        
                </Grid>
            )
        }
    }


    export default HomePage;
