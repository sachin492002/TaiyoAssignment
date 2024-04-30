import React from 'react';
import Charts from "./Charts";
import WorldMap from "./WorldMap";

function Maps() {
    return (
        <div className='flex flex-col'>
            <Charts/>
            <WorldMap/>
        </div>
    );
}

export default Maps;