import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {embedLink} from '../actions/embeder';

const Input = ({link, getLink}) => {
    let input;
    return(
        <div>
         <input ref={node => {input = node;}} value={link} onChange={() => getLink(input.value)}/>
        </div>
    );
};

Input.propTypes = {
    link: PropTypes.string,
    getLink: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        link: state.link
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLink: link => dispatch(embedLink(link))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);
