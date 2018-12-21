import { createStore, combineReducers } from 'redux';
import {connect, Provider } from 'react-redux'
import { format } from 'date-fns'
import {
  SET_DAY_TO_RATE,
  ADD_DAY_RATING,
  UPDATE_DAY_RATING,
  ADD_REASON,
  DELETE_REASON,
  ADD_REASON_DETAIL,
  UPDATE_REASON_DETAIL } from './actions'

const initialState = {
  userInfo: {
    email: undefined,
    firstName: undefined,
    lastName: undefined
  },
  dayToRate: undefined,
  dayRatings: [
    // {
    //   day: null,
    //   dayRating: null
    // }
  ],
  reasons: [
    // {
    //   day: undefined,
    //   reasonId: undefined,
    // }
  ],
  reasonDetails: [
    // {
    //   day: undefined,
    //   reasonId: undefined,
    //   detailType: undefined,
    //   info: undefined
    // }
  ]
};

let today = format(new Date(), 'YYYY-MM-DD');
function dayToRate(state = today, action) {
  switch (action.type) {
    case SET_DAY_TO_RATE:
      return action.dayToRate
    default:
      return state
  }
}


function dayRatings(state = [], action) {
  console.log('state', state)
  switch (action.type) {
    case ADD_DAY_RATING:
      return [
        ...state,
        {
          day: action.day,
          dayRating: action.dayRating
        }
      ]
    case UPDATE_DAY_RATING:
      return state.map( item => {
        if (item.day === action.day) {
          return { day: item.day, dayRating: action.dayRating };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}



function reasons(state = [], action) {

  console.log('ADD_REASON')
  switch (action.type) {
    case ADD_REASON:
      return [
        ...state,
        {
          day: action.day,
          reasonId: action.reasonId
        }
      ]
    case DELETE_REASON:
      return state.map( item => {
        if (item.day === action.day) {
          return { day: item.day, reasonId: action.reasonId };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
}





function reasonDetails(state = [], action) {
  switch (action.type) {
    case ADD_REASON_DETAIL:
      return [
        ...state,
        {
          day: action.day,
          reasonId: action.reasonId,
          detailType: action.detailType,
          info: action.info
        }
      ]
    case UPDATE_REASON_DETAIL:
      return state.map( item => {
        if (item.day === action.day) {
          return { 
            day: item.day, 
            reasonId: action.reasonId,
            detailType: action.detailType,
            info: action.info
            };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}



// const yourDayReducers = combineReducers({
//   dayRatings,
//   reasons,
//   reasonDetails
// })
export default function yourDayReducers(state = initialState, action) {
  return {
    dayToRate: dayToRate(state.dayToRate, action),
    dayRatings: dayRatings(state.dayRatings, action),
    reasons: reasons(state.reasons, action),
    reasonDetails: reasonDetails(state.reasonDetails, action)
  }
}
