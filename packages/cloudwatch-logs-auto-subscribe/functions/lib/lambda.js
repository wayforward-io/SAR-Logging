const AWS = require("./aws");
const lambda = new AWS.Lambda();
const { v4: uuidv4 } = require('uuid');

const addLambdaPermission = async (functionArn) => {
	const req = {
		Action: "lambda:InvokeFunction",
		FunctionName: functionArn,
		Principal: "logs.amazonaws.com",
		StatementId: `invoke-${uuidv4().substring(0, 8)}`
	};
	await lambda.addPermission(req).promise();
};

module.exports = {
	addLambdaPermission
};
