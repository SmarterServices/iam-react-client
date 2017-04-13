import React, { Component } from 'react';
import Validate from './Validate';
var testIam = {
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["CanRead"],
      "Resource": [
        "ssrn:ss:iam:::account/100/assestmentgroup/*/customquestions"
      ]
    },
    {
      "Effect": "Allow",
      "Action": ["CanUpdate","CanDelete","CanCreate"],
      "Resource": "ssrn:ss:iam:::account/100/assestmentgroup/1/customquestions"
    },
    {
      "Effect": "Deny",
      "Action": ["CanUpdate"],
      "Resource": [
        "ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
      ]
    }
  ]
}

class Test extends Component {
  render() {
    return (
      <div className="App">

        <Validate iam={testIam}>

        <div>
          <p iamAction="CanUpdate" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions">This is nested and should hide</p>
          <p iamAction="CanRead" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions">This is nested and should show</p>
        </div>
        <p iamAction="CanRead" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions">This should show</p>
        <p iamAction="CanUpdate" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions">This should hide</p>
        <select>
          <option iamAction="CanRead" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions">This should show</option>
          <option iamAction="CanUpdate" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions" >This should hide</option>
        </select>
        </Validate>



       <Validate iam={testIam} iamAction="CanRead" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions">
        <p> This should show and is nested in validate that has action and resourse</p>
       </Validate> 


       <Validate iam={testIam} iamAction="CanUpdate" iamResource="ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions">
        <p> This should hide and is nested in validate that has action and resourse</p>
       </Validate>


      </div>
    );
  }
}

export default Test;
