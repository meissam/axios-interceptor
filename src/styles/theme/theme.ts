import { DefaultTheme } from 'styled-components';

const fontSizeBase = 16;

export const theme: DefaultTheme = {
    typography: {
        fontFamily: 'sans-serif',
        fontSize: {
            base: `${Math.floor(fontSizeBase * 1)}px`, // 16px
            lead: `${Math.floor(fontSizeBase * 1.125)}px`, // ~18px
            medium: `${Math.floor(fontSizeBase * 0.875)}px`, // ~14px
            small: `${Math.floor(fontSizeBase * 0.8125)}px`, // ~13px
            extraSmall: `${Math.floor(fontSizeBase * 0.75)}px`, // ~12px
            h1: `${Math.floor(fontSizeBase * 2.25)}px`, // ~36px
            h2: `${Math.floor(fontSizeBase * 2)}px`, // ~32px
            h3: `${Math.floor(fontSizeBase * 1.75)}px`, // ~28px
            h4: `${Math.floor(fontSizeBase * 1.5)}px`, // ~24px
            h5: `${Math.floor(fontSizeBase * 1.25)}px`, // ~20px
            h6: `${Math.floor(fontSizeBase * 1.125)}px`, // ~18px
        },
        lineHeight: {
            base: 1.5,
            h1: 1.15,
            h2: 1.2,
            h3: 1.25,
            h4: 1.3,
            h5: 1.35,
            h6: 1.4,
        },
    },

    shadow: {
        black: '-5px 5px 0px #000',
        pirmary: '-5px 5px 0px #76005d',
    },

    borderRadius: {
        none: '0',
        sm: '.25rem',
        default: '.5rem',
        lg: '1rem',
        full: '9999px',
    },

    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
    },

    breakpoint: {
        extraSmall: '576px',
        small: '768px',
        medium: '992px',
        large: '1200px',
        extraLarge: '1400px',
    },

    space: {
        default: '15px',
        doubled: '30px',
    },

    color: {
        blue: '#007bff',
        indigo: '#6610f2',
        purple: '#6f42c1',
        pink: '#e83e8c',
        red: '#dc3545',
        darkRed: '#90131f',
        orange: '#fd7e14',
        yellow: '#ffc107',
        green: '#183d39',
        darkGreen: '#002925',
        teal: '#20c997',
        cyan: '#17a2b8',
        white: '#fff',
        gray: '#434e58',
        darkGray: '#343a40',
        primary: '#002925',
        secondary: '#6c757d',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#343a40',
    },
};
