import { memo } from 'react';
import { useRef } from 'react';

export const FilterInput = memo(({filterNames}) => {
    const renders = useRef(0)
    console.log("rendered", renders.current++)
    return ( <input type="text" onChange={filterNames} />
    )
})
