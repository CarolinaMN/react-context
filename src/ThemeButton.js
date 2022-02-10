import React from 'react';
import {ThemeContext} from './ThemeContext';

export default class ThemeButton extends React.Component {
    static contextType = ThemeContext;

    render(){
        let props = this.props;
        return(
            <button
                {...props}
                style={{background: this.context.background, color: this.context.color}} >
            </button>
        )
    }

}