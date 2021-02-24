'use strict';
const React = require('react');
const { Text, Box } = require('ink');
const importJsx = require("import-jsx");
const Example = importJsx("./components/Example.js");


const App = ({name = 'Ralph'}) => (
	<Box width={20} borderStyle="round" height={10} backgroundColor="#005cc5"  margin={2} borderColor="green">
		<Text>
			Hello, <Text backgroundColor="#005cc5"  color="white">{name}</Text>
		</Text>
		<Example />
	</Box>
);

module.exports = App;
