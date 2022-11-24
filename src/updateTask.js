const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();

module.exports.updateTask = async (event) => {
  const { id } = event.pathParameters;
  const { done, title, description } = JSON.parse(event.body);

  await db
    .update({
      TableName: "myTest",
      Key: { id },
      UpdateExpression:
        "set done = :done, title = :title, description = :description",
      ExpressionAttributeValues: {
        ":done": done,
        ":title": title,
        ":description": description,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "task updated",
    }),
  };
};
