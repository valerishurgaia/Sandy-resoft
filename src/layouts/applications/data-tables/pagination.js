import React from 'react';
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableButton = ({ text, icon }) => {
  return (
    <button
      style={{
        cursor: "pointer",
        backgroundColor: "transparent",
        color: "#364868",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        textAlign: "center",
        paddingLeft: "2px",
        marginRight: "6px",
        border: "1px solid #C7CCD0",
        outline: "none",
      }}
      onFocus={(e) => {
        e.target.style.backgroundColor = "#364868";
        e.target.style.color = "#FFFFFF"; 
      }}
      onBlur={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#364868"; 
      }}
    >
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

TableButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default TableButton;
