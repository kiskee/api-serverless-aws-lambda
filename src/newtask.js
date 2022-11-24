"use strict";
const { DynamoDB } = require("aws-sdk");
const { v4 } = require("uuid");

const db = new DynamoDB.DocumentClient();

module.exports.newtask = async (event) => {
  const { title, description } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  const newTask = {
    id,
    title,
    description,
    createdAt,
    done: false,
  };

  await db
    .put({
      TableName: "myTest",
      Item: newTask,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };
};
