import axios from 'axios';
const hostname = window.location.hostname
export const getShowsApi = () =>
    axios(`http://${hostname}:1337/epg`,
        {   headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
        .then(response => response.data)
        .catch(error => {throw error.response.data || error})