import React from 'react'

import './collection-filter-item.style.scss'

const CollectionFilterItem = ({agregarFiltro, id ,nombre, selected}) => (
    <div onClick={() => agregarFiltro(id)} className={`${nombre} tipo  ${selected ? "activa" : ""}`}>
        {nombre}
    </div>
)

export default CollectionFilterItem;