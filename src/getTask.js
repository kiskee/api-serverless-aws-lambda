const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();

module.exports.getTask = async (event) => {
  const { id } = event.pathParameters;
  const result = await db
    .get({
      TableName: "myTest",
      Key: { id },
    })
    .promise();

  const task = result.Item;

  return {
    status: 200,
    body: task,
  };
};
