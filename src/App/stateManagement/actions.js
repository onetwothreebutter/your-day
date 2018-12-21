/*
 * action types
 */
export const SET_DAY_TO_RATE = 'SET_DAY_TO_RATE'
export const ADD_DAY_RATING = 'ADD_DAY_RATING'
export const UPDATE_DAY_RATING = 'UPDATE_DAY_RATING'
export const ADD_REASON = 'ADD_REASON'
export const DELETE_REASON = 'DELETE_REASON'
export const ADD_REASON_DETAIL = 'ADD_REASON_DETAIL'
export const UPDATE_REASON_DETAIL = 'UPDATE_REASON_DETAIL'


/*
 * action creators
 */

export function setDayToRate(day) {
  return { type: SET_DAY_TO_RATE, day}
}

export function addDayRating(dayRating, day) {
  return { type: ADD_DAY_RATING, dayRating, day}
}

export function updateDayRating(dayRating, day) {
  return { type: UPDATE_DAY_RATING, dayRating, day}
}

export function addReason(reasonId, day, dayRating) {
  return { type: ADD_REASON, reasonId, day, dayRating}
}

export function deleteReason(reasonId, day, dayRating) {
  return { type: DELETE_REASON, reasonId, day, dayRating }
}

export function addReasonDetail(reasonId, reasonDetail, day) {
  return { type: ADD_REASON_DETAIL, reasonId, reasonDetail, day }
}

export function updateReasonDetail(reasonId, reasonDetail, day) {
  return { type: UPDATE_REASON_DETAIL, reasonId, reasonDetail, day }
}