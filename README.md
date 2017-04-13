react-ui-validate
====
Description: A component that will remove are add elements to the dom based on if the users iam document allows access.
Getting Started:
===
	var ValidateConstructor = require('ValidateConstructor')
	var Validate = new ValidateConstructor({iam:'iam object',hash:'has of iam object'})
Two ways of use:
=
1.

	<Validate iam="iam doc" iamAction="iam action" iamResource="iam resource">
	<div><p>first way to use</p></div>
	</Validate>
	
This way will hide or show everything in the validate component based on the action and resource that was tagged to it.

2.

	<Validate iam="iam doc">
	
	<div>
		<p iamAction="action" iamResource="resource">second way to use</p>
		<div>
			<p iamAction="" iamResource="">At any nest level</p>
		</div>
	</div>
	
This way will add or remove content from the dom based on the action and resource tags applied directly to the element. This will work at any nest level(so you could wrap the whole page if you wanted to invalidate)				and