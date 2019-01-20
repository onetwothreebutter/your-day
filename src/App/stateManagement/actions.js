import {authRef, authProvider, dayRatingsRef, databaseRef, firebaseRef} from "../utils/yourDayFirebase";


/*
 * action types
 */
export const FETCH_USER = 'FETCH_USER';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_DAY_TO_RATE = 'SET_DAY_TO_RATE';
export const ADD_DAY_RATING = 'ADD_DAY_RATING';
export const UPDATE_DAY_RATING = 'UPDATE_DAY_RATING';
export const ADD_REASON = 'ADD_REASON';
export const DELETE_REASON = 'DELETE_REASON';
export const DELETE_REASONS_FOR_DAY_RATING = 'DELETE_REASONS_FOR_DAY_RATING';
export const ADD_REASON_DETAIL = 'ADD_REASON_DETAIL';
export const UPDATE_REASON_DETAIL = 'UPDATE_REASON_DETAIL';
export const SAVE_DAY_RATING = 'SAVE_DAY_RATING';
export const FETCH_DAY_RATINGS = 'FETCH_DAY_RATINGS';


/*
 * action creators
 */

export function fetchUser() {
  return dispatch => {
    authRef.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: FETCH_USER,
          payload: user
        });
      } else {
        dispatch({
          type: FETCH_USER,
          payload: null
        });
      }
    });
  };
}


export function signIn() {
  return dispatch => {
    authRef
      .signInWithPopup(authProvider)
      .then(result => {})
      .catch(error => {
        console.log(error);
      });
  }
}

export function signOut() {
  return dispatch => {
    authRef
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function setLoggedIn(loggedIn){
  return { type: SET_LOGGED_IN, loggedIn }
}

export function setDayToRate(day) {
  return { type: SET_DAY_TO_RATE, day}
}

export function addDayRating(dayRating, day, uid) {
  return dispatch => {
    dayRatingsRef
      .push()
      .set({
        userId: uid,
        day,
        dayRating
      });

  }
}

export function updateDayRating(id, dayRating) {
  return dispatch => {
    let updates = {};
    updates['/day-ratings/' + id] = dayRating;
   firebaseRef.update(updates);
  }
}

export function fetchDayRatings() {
  return dispatch => {
    dayRatingsRef.on("value", snapshot => {
      dispatch({
        type: FETCH_DAY_RATINGS,
        payload: snapshot.val()
      });
    });
  }
}


export function addReason(reasonType, dayRatingId) {
  return { type: ADD_REASON, reasonType, dayRatingId }
}

export function deleteReason(id) {
  return { type: DELETE_REASON, id }
}

export function deleteReasonsForDayRating(dayRatingId) {
  return { type: DELETE_REASONS_FOR_DAY_RATING, dayRatingId }
}

export function addReasonDetail(reasonType, reasonDetail, day) {
  return { type: ADD_REASON_DETAIL, reasonType, reasonDetail, day }
}

export function updateReasonDetail(reasonType, reasonDetail, day) {
  return { type: UPDATE_REASON_DETAIL, reasonType, reasonDetail, day }
}