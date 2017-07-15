import React, { Component, Children, cloneElement } from 'react';
import iam from 'open-iam';

var ValidateConstructor = function(config) {
  return class Validate extends Component {
    deepMap(children, deepMapFn) {
      return Children.map(children, child => {
        if (child) {
          if (
            child.props &&
              child.props.children &&
              typeof child.props.children === 'object'
          ) {
            // Clone the child that has children and map them too
            return deepMapFn(
              cloneElement(child, {
                ...child.props,
                children: this.deepMap(child.props.children, deepMapFn)
              })
            );
          }
          return deepMapFn(child);
        } else {
          return child;
        }
      });
    }
    render() {
      let localIam = config.iam;
      let children = null;

      //if action and resource was tagged to validate then it is applyed to every child nested inside
      if (this.props && this.props.iamAction && this.props.iamResource) {
        //check auth based on the iam doc action and resource to decide if this child content should be displayed.
        if (
          iam.authorize(
            this.props.iamResource,
            this.props.iamAction,
            iam.processIamData(localIam)
          )
        ) {
          //set childWithProps to the unaltered children because auth returned true
          children = this.props.children;
        } else {
          //return nothing to display to the dom because authorize returned false
          children = null;
        }
      } else {
        //else validate will loop its children recursively and look for action/resources tagged to any ui element
        children = this.deepMap(this.props.children, child => {
          //if this child has action and resource run auth against it
          if (child.props && child.props.iamAction && child.props.iamResource) {
            //either return the child or blank based on iam authorize
            return iam.authorize(
              child.props.iamResource,
              child.props.iamAction,
              iam.processIamData(localIam)
            )
              ? child
              : '';
          } else {
            //no action or resource so its a normal dom element
            return child;
          }
        });
      }
      return (
        <div className="none" style={{'display':'inlineBlock'}}>
          {children}
        </div>
      );
    }
  };
};

export default ValidateConstructor;
