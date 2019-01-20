import { createStore, combineReducers } from 'redux';
import {connect, Provider } from 'react-redux';
import { format } from 'date-fns';
import {
  FETCH_USER,
  SET_EMAIL_REQUEST,
  SET_DAY_TO_RATE,
  ADD_DAY_RATING,
  UPDATE_DAY_RATING,
  ADD_REASON,
  DELETE_REASON,
  DELETE_REASONS_FOR_DAY_RATING,
  ADD_REASON_DETAIL,
  UPDATE_REASON_DETAIL,
  FETCH_DAY_RATINGS
} from './actions';
import { databaseRef } from "../utils/yourDayFirebase";

const initialState = {
  userInfo: {
    user: undefined,
    loggedIn: false
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
    //   dayRating: undefined
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




function userInfo(state = {}, action){
  console.log('USERINFO REDUCER', action);
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        loggedIn: action.payload !== null
      };
    default:
      return state;
  }
}


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

    case FETCH_DAY_RATINGS:
      return action.payload || state;

    default:
      return state;
  }
}



function reasons(state = [], action) {
  switch (action.type) {
    case ADD_REASON:
      var newReasonKey = databaseRef.child('reasons').push().key;
      databaseRef.child('reasons/' + newReasonKey).set({
        dayRatingId: action.dayRatingId,
        reasonType: action.reasonType,
      });

      return [
        ...state,
        {
          id: newReasonKey,
          dayRatingId: action.dayRatingId,
          reasonType: action.reasonType,
        }
      ]
    case DELETE_REASON:
      databaseRef.child('reasons/' + action.id).remove();
      return state.filter( item => {
        return !(item.id === action.id);
      });

    case DELETE_REASONS_FOR_DAY_RATING:
      //delete reasons associated with previous day rating
      let reasonsRef = databaseRef.child('reasons');
      reasonsRef.orderByChild('dayRatingId').equalTo(action.dayRatingId).once('value').then(
        function(snapshot) {
          const updates = {};
          snapshot.forEach(child => {
            updates[child.key] = null;
          });
          reasonsRef.update(updates);
        });
      return state.filter( item => {
        return !(item.dayRatingId === action.dayRatingId);
      });

    default:
      return state;
  }
}





function reasonDetails(state = [], action) {
  switch (action.type) {
    case ADD_REASON_DETAIL:
      var newReasonDetailKey = databaseRef.child('reasons-details').push().key;
      databaseRef.child('reasons-details/' + newReasonDetailKey).set({
        id: newReasonDetailKey,
        reasonId: action.reasonId,
        day: action.day,
        reasonType: action.reasonType,
        detailType: action.detailType,
        info: action.info
      });
      return [
        ...state,
        {
          id: newReasonDetailKey,
          reasonId: action.reasonId,
          day: action.day,
          reasonType: action.reasonType,
          detailType: action.detailType,
          info: action.info
        }
      ]
    case UPDATE_REASON_DETAIL:
      return state.map( item => {
        if (item.id === action.id) {
          return {
            id: action.id,
            reasonId: action.reasonId,
            day: action.day,
            reasonType: action.reasonType,
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
    userInfo: userInfo(state.userInfo, action),
    dayToRate: dayToRate(state.dayToRate, action),
    dayRatings: dayRatings(state.dayRatings, action),
    reasons: reasons(state.reasons, action),
    reasonDetails: reasonDetails(state.reasonDetails, action)
  }
}
