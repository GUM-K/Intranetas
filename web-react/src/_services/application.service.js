import config from 'config';
import { authHeader } from '../_helpers';

export const applicationService = {
    addAplication,
    getPositions,
    getPosition,
    getApplications
};

function addAplication(application) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: application
    };

    return fetch(`${config.apiUrl}/applications/upload`, requestOptions)
        .then(handleResponse);
}

async function getPositions() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/applications/positions`, requestOptions).then(handleResponse);
    const res = await fetch(`${config.apiUrl}/applications/positions`, requestOptions);
    const result = await res.json();
    return result;
}

async function getPosition(userId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/applications/position/${userId}`, requestOptions).then(handleResponse);
    const res = await fetch(`${config.apiUrl}/applications/position/${userId}`, requestOptions);
    const result = await res.json();
    return result;
}
async function getApplications(userId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/applications/${userId}`, requestOptions).then(handleResponse);
    const res = await fetch(`${config.apiUrl}/applications/${userId}`, requestOptions);
    const result = await res.json();
    return result;
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}