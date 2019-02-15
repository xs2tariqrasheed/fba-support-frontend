/*
 *
 * Test reducer
 *
 */

import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  name: 'Leo',
};

/* eslint-disable default-case, no-param-reassign */
const testReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        return draft;
      default:
        return draft;
    }
  });

export default testReducer;
