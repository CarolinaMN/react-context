import React from 'react';

export const themes = {
    light: {
        background: '#ffffff',
        color: '#000000'
    },
    dark: {
        background: '#000000',
        color:'#ffffff'
    }
}

export const ThemeContext = React.createContext({background: '', color: ''});