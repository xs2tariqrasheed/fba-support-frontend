/**
 *
 * Test
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { DatePicker, Icon } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTest from './selectors';
import reducer from './reducer';
import saga from './saga';
import ContactForm from './ContactForm';

/* eslint-disable react/prefer-stateless-function */
export class Test extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };

  render() {
    return (
      <div align="center">
        <br />
        <br />
        <Icon type="cloud-download" />
        <br />
        <br />
        <DatePicker />
        <br />
        <h2>Test Redux Form</h2>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

Test.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  test: makeSelectTest(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'test', reducer });
const withSaga = injectSaga({ key: 'test', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Test);
