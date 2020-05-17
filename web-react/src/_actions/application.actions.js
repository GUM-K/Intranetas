import { applicationConstants } from '../_constants';
import { applicationService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const applicationActions = {
    addAplication,
    getPositions
};

function addAplication(application) {
    return dispatch => {
        dispatch(request({ application }));

        applicationService.addAplication(application)
            .then(
                application => { 
                    dispatch(success(application));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(application) { return { type: applicationConstants.APPLICATION_SUCCESS, application } }
    function success(application) { return { type: applicationConstants.APPLICATION_SUCCESS, application } }
    function failure(error) { return { type: applicationConstants.APPLICATION_FAILURE, error } }
}

function getPositions() {
    return dispatch => {
        dispatch(request());

        applicationService.getPositions()
            .then(
                positions => { 
                    dispatch(success(positions));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: applicationConstants.GET_POSITIONS_REQUEST } }
    function success(positions) { return { type: applicationConstants.GET_POSITIONS_SUCCESS, positions } }
    function failure(error) { return { type: applicationConstants.GET_POSITIONS_FAILURE, error } }
}
