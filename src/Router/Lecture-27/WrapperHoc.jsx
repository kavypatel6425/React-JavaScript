import React from 'react'

function WrapperHoc(Wrappercomponanats) {
    function EnhancedComponent() {
        return(
            <div>
                <p>Enhanced Massge</p>
                <Wrappercomponanats/>
            </div>
        )
    }
    return EnhancedComponent
}

export default WrapperHoc