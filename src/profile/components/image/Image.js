import React from 'react'

const Image = ({children,defau}) => {
// console.log(defau)

    return (
        <div style={{"height" : "800px", "width" : "100%", boxShadow:"25px"}}>
            {children}
            <h4 style={{color: "#ffff"}}>{defau}</h4>
        </div>
    )
   
}
Image.defaultProps = {
    defau: "this photo is defaultProps"
   }

export default Image
