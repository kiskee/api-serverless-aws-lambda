const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();

module.exports.deleteTask = async (event) => {
  const { id } = event.pathParameters;

  await db
    .delete({
      TableName: "myTest",
      Key: {
        id,
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: "Deleted Task",
    },
  };
};
