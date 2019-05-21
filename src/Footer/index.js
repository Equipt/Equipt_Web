import React from 'react';
import theme from '../theme';

const Footer = () => (
    <section style={ styles.container }>
        Footer
    </section>
)

const styles = {
    container: {
        clear: 'both',
        backgroundColor: theme.colors.primary,
        minHeight: 100
    }
}

export default Footer;
