import React from 'react'
import PropTypes from 'prop-types'


const Profession = ({pro}) => {
    return (
        <div>
            <h2>Player Profession : {pro.prof}</h2>
        </div>
    )
}
Profession.propTypes = {
    pro:PropTypes.object
  }
  
export default Profession
