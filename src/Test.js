import React, { Component } from 'react';
import ValidateConstructor from './Validate';
var testIam = {
  Statement: [
    {
      Effect: 'Allow',
      Action: [ 'CanRead' ],
      Resource: [
        'ssrn:ss:iam:::account/100/assestmentgroup/*/customquestions'
      ]
    },
    {
      Effect: 'Allow',
      Action: [ 'CanUpdate', 'CanDelete', 'CanCreate' ],
      Resource: 'ssrn:ss:iam:::account/100/assestmentgroup/1/customquestions'
    },
    {
      Effect: 'Deny',
      Action: [ 'CanUpdate' ],
      Resource: [
        'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions'
      ]
    }
  ]
};
var Validate = new ValidateConstructor({ iam: testIam });

class Test extends Component {
  render() {
    return (
      <div className="App">
        <Validate>
          <div>
            <p
              iamAction="CanUpdate"
              iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
            >
              This is nested and should hide
            </p>
            <p
              iamAction="CanRead"
              iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
            >
              This is nested and should show
            </p>
          </div>
          <p
            iamAction="CanRead"
            iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
          >
            This should show
          </p>
          <p
            iamAction="CanUpdate"
            iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
          >
            This should hide
          </p>
          <select>
            <option
              iamAction="CanRead"
              iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
            >
              This should show
            </option>
            <option
              iamAction="CanUpdate"
              iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
            >
              This should hide
            </option>
          </select>
        </Validate>
        <Validate>
          <button
            iamAction="CanRead"
            iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
            className="btn--outline btn--negative"
          >
            Text here
          </button>
        </Validate>
        <Validate
          iamAction="CanRead"
          iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
        >
          <p>
            {' '}This should show and is nested in validate that has action and resourse
          </p>
        </Validate>
        <Validate
          iamAction="CanUpdate"
          iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
        >
          <p>
            {' '}This should hide and is nested in validate that has action and resourse
          </p>
        </Validate>
        <Validate>
          <div className="wrap">
            <header className="page__header">
              <div className="wrap">
                <h1 className="page__title">hi</h1>
                <div className="page__actions actions">
                  hi
                  {null}
                </div>
              </div>
            </header>
          </div>
        </Validate>
      </div>
    );
  }
}

export default Test;
