const React = require('react');
const { Text, Newline } = require('ink');

const Example = () => (
	<Text>
		<Text color="green">component werkt</Text>
		<Newline />
		<Text color="red">Proficiat!</Text>
	</Text>
);

module.exports = Example;
