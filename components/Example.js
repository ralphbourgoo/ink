const React = require('react');
const { Text, Newline } = require('ink');

const Example = () => (
	<Text>
		<Text color="green">Node Modules</Text>
		<Newline />
		<Text color="red">Deleted</Text>
	</Text>
);

module.exports = Example;
