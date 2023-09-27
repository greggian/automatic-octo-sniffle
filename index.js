
import { AccessToken } from 'livekit-server-sdk';

var apiUrl = process.env.LIVEKIT_API_KEY;
var apiKey = process.env.LIVEKIT_API_SECRET;

const createToken = (roomName, participantName) => {
  const at = new AccessToken(apiUrl, apiKey, {
    identity: participantName,
  });
  at.addGrant({ roomJoin: true, room: roomName });

  return at.toJwt();
}

export const handler = async ({queryStringParameters: params}) => {
  console.log("params", params);
  return {
    statusCode: 200,
    body: createToken(params.roomName, params.participantName)
  };
};
