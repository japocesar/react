import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({ x: 0, y: 0});
    const { x, y } = coors;

    const mouseMove = (e) => {
        // console.log(e);
        const coors = { x: e.x, y: e.y };
        setCoors(coors);
        console.log(coors)
    }

    useEffect(() => {
        // console.log('Componente montado')
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Message</h3>
            <p>
                X: { x } Y: { y }
            </p>
        </div>
    )
}
