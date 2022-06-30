import React from "react"
import PropTypes from 'prop-types';
export const Filter = ({ value, onChange }) => {
            return <>
                    <h2>Find contacts by name</h2>
            <input style={{ width: 300, height: 40}}  type="text" value={value} onChange= {onChange} />
        </>
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};