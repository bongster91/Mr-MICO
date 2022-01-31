export const apiURL = () => {
    return window.location.hostname === 'localhost'
        ? 'http://localhost:3000'
        : 'https://stormy-hamlet-50889.herokuapp.com'
};