import { createSelector } from 'reselect';

/**
 * Direct selector to the test state domain
 */

const selectTestDomain = state => state.test;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Test
 */

const makeSelectTest = () =>
  createSelector(selectTestDomain, substate => substate);

export default makeSelectTest;
export { selectTestDomain };
