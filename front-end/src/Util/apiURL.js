export const apiURL = () => {
    return window.location.hostname === 'localhost'
        ? 'http://localhost:4000'
        : 'https://mr-mico.herokuapp.com/'
};