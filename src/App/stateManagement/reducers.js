import { createStore, combineReducers } from 'redux';
import {connect, Provider } from 'react-redux'
import { format } from 'date-fns'
import {
  ADD_DAY_RATING,
  UPDATE_DAY_RATING,
  ADD_REASON,
  UPDATE_REASON,
  ADD_REASON_DETAIL,
  UPDATE_REASON_DETAIL } from './actions'

const initialState = {
  userInfo: {
    email: null,
    firstName: null,
    lastName: null
  },
  dayToRate: format(new Date(), 'YYYY-MM-DD'),
  dayRatings: [
    // {
    //   day: null,
    //   dayRating: null
    // }
  ],
  reasons: [
    {
      day: null,
      reasonId: null,
    }
  ],
  reasonDetails: [
    {
      day: null,
      reasonId: null,
      detailType: null,
      info: null
    }
  ]
};


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
  switch (action.type) {
    case ADD_REASON:
      return [
        ...state,
        {
          day: action.day,
          reasonId: action.reasonId
        }
      ]
    case UPDATE_REASON:
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
    dayRatings: dayRatings(state.dayRatings, action),
    reasons: reasons(state.reasons, action),
    reasonDetails: reasonDetails(state.reasonDetails, action)
  }
}
