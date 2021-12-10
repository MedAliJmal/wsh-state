import React from 'react'

const Bio = ({Biog}) => {
    return (
        <div>
           <h2 style={{ margin : "20px" , padding : "50px", fontFamily : "Arial"}}> Player Bio : {Biog.bio}</h2>
        </div>
    )
}

export default Bio
