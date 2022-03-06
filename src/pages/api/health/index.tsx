const http = require('http');

export default (req, res) => {
  // Test
  const options = {
    host: 'localhost',
    port: '3000',
    timeout: 2000,
  };
  let error = null;

  const healthCheck = http.request(options, (res) => {
    console.log(`HEALTHCHECK STATUS: ${res.statusCode}`);
    if (res.statusCode == 200) {
      console.log('Server working as per expectation code: 200');
    } else {
      console.log('Error on server error code:', res.statusCode);
    }
  });
  healthCheck.on('error', function (err) {
    console.log('ERROR', err);
    error = err;
  });
  healthCheck.end();

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(
    JSON.stringify({
      status: res.statusCode,
      message: error || null,
    }),
  );
};
