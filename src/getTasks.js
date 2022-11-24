"use strict";
const { DynamoDB } = require("aws-sdk");

const db = new DynamoDB.DocumentClient();

module.exports.getTasks = async (event) => {
  const result = await db.scan({ TableName: "myTest" }).promise();
  const tasks = result.Items;
  return {
    status: 200,
    body: {
      tasks,
    },
  };
};
