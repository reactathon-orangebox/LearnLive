export function handler(event, context, callback) {
  console.log(event.queryStringParameters.user)
  var user = event.queryStringParameters.user;
  var role;

  if (user === 'larrychangg') {
    role = 'publisher';
  } else {
    role = 'subscriber';
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({role: role})
  })
}