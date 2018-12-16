/*
 * action types
 */
export const ADD_DAY_RATING = 'ADD_DAY_RATING'
export const UPDATE_DAY_RATING = 'UPDATE_DAY_RATING'
export const ADD_REASON = 'ADD_REASON'
export const UPDATE_REASON = 'UPDATE_REASON'
export const ADD_REASON_DETAIL = 'ADD_REASON_DETAIL'
export const UPDATE_REASON_DETAIL = 'UPDATE_REASON_DETAIL'


/*
 * action creators
 */

export function addDayRating(dayRating, day) {
  return { type: ADD_DAY_RATING, dayRating, day}
}

export function updateDayRating(dayRating, day) {
  return { type: UPDATE_DAY_RATING, dayRating, day}
}

export function addReason(reasonId, day) {
  return { type: ADD_REASON, reasonId, day }
}

export function updateReason(reasonId, day) {
  return { type: UPDATE_REASON, reasonId, day }
}

export function addReasonDetail(reasonId, reasonDetail, day) {
  return { type: ADD_REASON_DETAIL, reasonId, reasonDetail, day }
}

export function updateReasonDetail(reasonId, reasonDetail, day) {
  return { type: UPDATE_REASON_DETAIL, reasonId, reasonDetail, day }
}