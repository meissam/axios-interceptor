import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            fontFamily: string;
            fontSize: {
                base: string;
                lead: string;
                medium: string;
                small: string;
                extraSmall: string;
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
            };
            lineHeight: {
                base: number;
                h1: number;
                h2: number;
                h3: number;
                h4: number;
                h5: number;
                h6: number;
            };
        };
        shadow: {
            black: string;
            pirmary: string;
        };

        borderRadius: {
            none: string;
            sm: string;
            default: string;
            lg: string;
            full: string;
        };

        backgroundSize: {
            auto: string;
            cover: string;
            contain: string;
        };

        breakpoint: {
            extraSmall: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
        };

        space: {
            default: string;
            doubled: string;
        };

        color: {
            blue: string;
            indigo: string;
            purple: string;
            pink: string;
            red: string;
            darkRed: string;
            orange: string;
            yellow: string;
            green: string;
            darkGreen: string;
            teal: string;
            cyan: string;
            white: string;
            gray: string;
            darkGray: string;
            primary: string;
            secondary: string;
            success: string;
            info: string;
            warning: string;
            danger: string;
            light: string;
            dark: string;
        };
    }
}
