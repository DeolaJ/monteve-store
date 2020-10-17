/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default MyApp;
