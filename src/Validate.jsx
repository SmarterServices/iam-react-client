import React, { Component } from 'react';
import iam from 'open-iam';
import Children from 'react-children-utilities';

class Validate extends Component {
  render() {
    //childrenWithProps is what will be spit back out by validate and displayed to the dom.
    let children = null

    //if action and resource was tagged to validate then it is applyed to every child nested inside
    if(this.props.iamAction && this.props.iamResource) {
      //check auth based on the iam doc action and resource to decide if this child content should be displayed.
      if(iam.authorize(this.props.iamResource,this.props.iamAction,iam.processIamData(this.props.iam))) {
        //set childWithProps to the unaltered children because auth returned true
       children = this.props.children;
      } else {
        //return nothing to display to the dom because authorize returned false
        children = null;
      }
    } else {
      //else validate will loop its children recursively and look for action/resources tagged to any ui element
      children = Children.deepMap(this.props.children,
     (child) => {
      //if this child has action and resource run auth against it
      if(child.props.iamAction && child.props.iamResource) {
        //either return the child or blank based on iam authorize
        return (iam.authorize(child.props.iamResource,child.props.iamAction,iam.processIamData(this.props.iam))) ? child : '' 
      } else {
        //no action or resource so its a normal dom element
      return child
      }
    }
    );
    }
    return (
      <div className="none">
      {children}
      </div>
    );
  }
}

export default Validate;
