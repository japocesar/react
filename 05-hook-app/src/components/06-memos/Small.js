import React from 'react'

export const Small = React.memo(( {value} ) => {
    console.log('Renderizando <Small />')
    return (
        <small>
            { value }
        </small>
    )
});
