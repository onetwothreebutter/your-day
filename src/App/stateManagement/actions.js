/*
 * action types
 */
export const SET_EMAIL_REQUEST = 'SET_EMAIL_REQUEST'
export const SET_EMAIL_SUCCESS = 'SET_EMAIL_SUCCESS'
export const SET_EMAIL_FAILURE = 'SET_EMAIL_FAILURE'
export const SET_DAY_TO_RATE = 'SET_DAY_TO_RATE'
export const ADD_DAY_RATING = 'ADD_DAY_RATING'
export const UPDATE_DAY_RATING = 'UPDATE_DAY_RATING'
export const ADD_REASON = 'ADD_REASON'
export const DELETE_REASON = 'DELETE_REASON'
export const DELETE_REASONS_FOR_DAY_RATING = 'DELETE_REASONS_FOR_DAY_RATING'
export const ADD_REASON_DETAIL = 'ADD_REASON_DETAIL'
export const UPDATE_REASON_DETAIL = 'UPDATE_REASON_DETAIL'
export const SAVE_DATA = 'SAVE_DATA'


/*
 * action creators
 */
export function setEmailRequest(){
  return { type: SET_EMAIL_REQUEST }
}

export function setEmailSuccess(email){
  return { type: SET_EMAIL_SUCCESS, email }
}

export function setEmailFailure(error){
  return { type: SET_EMAIL_FAILURE, error }
}

export function setDayToRate(day) {
  return { type: SET_DAY_TO_RATE, day}
}

export function addDayRating(dayRating, day) {
  return { type: ADD_DAY_RATING, dayRating, day}
}

export function updateDayRating(id, dayRating, day) {
  return { type: UPDATE_DAY_RATING, id, dayRating, day }
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

export function saveData() {
  return { type: SAVE_DATA };
}