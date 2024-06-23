import { Handler } from 'aws-lambda';
import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand
} from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient();


export const handler: Handler = async (event, context) => {
  // your function code goes here
  event['response']['autoConfirmUser'] = true
  event['response']['autoVerifyEmail'] = true
  const command = new AdminAddUserToGroupCommand({
    GroupName: "NO_PAY",
    Username: event.userName,
    UserPoolId: event.userPoolId
  });
  const response = await client.send(command);
  console.log('processed', response.$metadata.requestId);
  return event;
};