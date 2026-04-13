import React from 'react'
import Hello from './Hoc'
import WrapperHoc from './WrapperHoc'

function WithMassge() {
    const Printmassge = WrapperHoc(Hello)
    return (
        <>
            <h2>Namaste Bharat</h2>
            <Printmassge />
        </>
    )
}

export default WithMassge