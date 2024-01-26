import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const Dyno = new DynamoDBClient({
  endpoint: "http://localhost:8000",
})
