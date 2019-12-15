import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = (props) => {
    return (<>
        <BasicButton bgcolor={props.bgcolor}>{props.text}</BasicButton>
    </>);
}

Button.propTypes = {
    /* 按鈕文字 */
    text: PropTypes.string,
    /* 按鈕背景色 */
    bgcolor: PropTypes.string
};

Button.defaultProps = {
    bgcolor: '#fff'
};

const BasicButton = styled.button`
  background-color: ${props => props.bgcolor};
  cursor: pointer;
`;

export default Button;