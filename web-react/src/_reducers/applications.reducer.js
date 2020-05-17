import { applicationConstants } from '../_constants';

export function applications(state = {}, action) {
  switch (action.type) {
    case applicationConstants.APPLICATION_REQUEST:
      return {
        ...state,
        application: action.application
      };
    case applicationConstants.APPLICATION_SUCCESS:
      return {
        ...state,
        application: action.application
      };
    case applicationConstants.APPLICATION_FAILURE:
      return { 
        error: action.error
      };
    case applicationConstants.GET_POSITIONS_REQUEST:
    return {
        ...state,
        waiting: true
    };
    case applicationConstants.GET_POSITIONS_SUCCESS:
    return {
        ...state,
        positions: action.positions
    };
    case applicationConstants.GET_POSITIONS_FAILURE:
    return { 
        error: action.error
    };
    case applicationConstants.GET_POSITION_REQUEST:
      return {
          ...state,
          userId: action.userId
      };
    case applicationConstants.GET_POSITION_SUCCESS:
      return {
          ...state,
          position: action.position
      };
    case applicationConstants.GET_POSITION_FAILURE:
      return { 
          error: action.error
      };
    case applicationConstants.GET_APPLICATIONS_REQUEST:
      return {
          ...state,
          userId: action.userId
      };
    case applicationConstants.GET_APPLICATIONS_SUCCESS:
      return {
          ...state,
          applications: action.applications
      };
    case applicationConstants.GET_APPLICATIONS_FAILURE:
      return { 
          error: action.error
      };
    default:
      return state
  }
}