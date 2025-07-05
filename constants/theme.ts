export const useTheme = () => {
    return {
        colors: {
            primaryBg: '#fff',
            secondaryBg: '#e9ecef',
            primary: '#023047',
            text: '#000',
        },
        borderRadius: {
            none: '0',
            xs: 5,
            sm: 10,
            md: 15,
            lg: 20,
            xl: 25,
            '2xl': 50,
            '3xl': 75,
            full: 1000
        },
        shadows: {
            sm: '0 1px 2px 0 #fff',
            DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
            xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
            none: 'none'
        }
    }
};