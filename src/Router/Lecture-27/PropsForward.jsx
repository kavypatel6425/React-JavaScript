import React from 'react'

function PropsForward(WrappedComponent) {
    function EnhancedProps({ hasAccess, props }) {
        console.log("Props:", props);
        // return (
        //     <>
        //         <p>Enhanced Massge</p>
        //         <WrappedComponent {...props} />
        //     </>
        // )

        if (!hasAccess) {
            return <h2>Access Denied</h2>    
        }
        <WrappedComponent {...props} />
    }
    return EnhancedProps
}

export default PropsForward