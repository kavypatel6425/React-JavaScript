// import React from 'react'

// function Card() {
//   return (
//     <div>
//         <title>Title</title>
//         <p>Description</p>
//     </div>
//   )
// }

// export default Card


import React from 'react'

function Card(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card