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
        waiting: true
    };
    case applicationConstants.GET_POSITIONS_SUCCESS:
    return {
        positions: action.positions
    };
    case applicationConstants.GET_POSITIONS_FAILURE:
    return { 
        error: action.error
    };
    case applicationConstants.GET_POSITION_REQUEST:
      return {
          waiting: true,
          userId: action.userId
      };
    case applicationConstants.GET_POSITION_SUCCESS:
      return {
          position: action.position
      };
    case applicationConstants.GET_POSITION_FAILURE:
      return { 
          error: action.error
      };
    default:
      return state
  }
}