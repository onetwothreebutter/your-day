import { createStore, combineReducers } from 'redux';
import {connect, Provider } from 'react-redux';
import { format } from 'date-fns';
import {
  SET_EMAIL_REQUEST,
  SET_DAY_TO_RATE,
  ADD_DAY_RATING,
  UPDATE_DAY_RATING,
  ADD_REASON,
  DELETE_REASON,
  DELETE_REASONS_FOR_DAY_RATING,
  ADD_REASON_DETAIL,
  UPDATE_REASON_DETAIL} from './actions';
import yourDayFirebase from '../utils/yourDayFirebase';

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



function getUsersState() {

}



function userInfo(state = {}, action){
  console.log('USERINFO FUNCTION');
  switch (action.type) {
    case SET_EMAIL_REQUEST:
      return {
        ...state,
        email: action.email
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

    case ADD_DAY_RATING:
      var dayRatingKey = yourDayFirebase().ref().child('day-ratings').push().key;
      yourDayFirebase().ref('day-ratings/' + dayRatingKey).set({
        day: action.day,
        dayRating: action.dayRating
      });

      return [
        ...state,
        {
          id: dayRatingKey,
          day: action.day,
          dayRating: action.dayRating
        }
      ]

    case UPDATE_DAY_RATING:
      yourDayFirebase().ref('day-ratings/' + action.id).set({
        day: action.day,
        dayRating: action.dayRating
      });

      return state.map( item => {
        if (item.id === action.id) {
          return {
            id: item.id,
            day: item.day,
            dayRating: action.dayRating
          };
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
      var newReasonKey = yourDayFirebase().ref().child('reasons').push().key;
      yourDayFirebase().ref('reasons/' + newReasonKey).set({
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
      yourDayFirebase().ref('reasons/' + action.id).remove();
      return state.filter( item => {
        return !(item.id === action.id);
      });

    case DELETE_REASONS_FOR_DAY_RATING:
      //delete reasons associated with previous day rating
      let reasonsRef = yourDayFirebase().ref('reasons');
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
      var newReasonDetailKey = yourDayFirebase().ref().child('reasons-details').push().key;
      yourDayFirebase().ref('reasons-details/' + newReasonDetailKey).set({
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
