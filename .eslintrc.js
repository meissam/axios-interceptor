module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            'babel-module': {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                alias: {
                    '@': './src',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@hooks': './src/hooks',
                    '@services': './src/services',
                    '@store': './src/store',
                    '@types': './src/types',
                    '@utils': './src/utils',
                    '@views': './src/views',
                    '@styles': './src/styles',
                },
            },
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended', //should be at the last
    ],
    rules: {
        'import/no-named-as-default': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
