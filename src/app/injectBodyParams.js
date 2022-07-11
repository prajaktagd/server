const injectBodyParams = (req, res, next) => {
  if (req.method !== 'POST') {
    next();
    return;
  }

  let data = '';
  req.on('data', (chunk) => data += chunk);

  req.on('end', () => {
    req.body = data;
    req.bodyParams = new URLSearchParams(data);
    next();
  });
};

module.exports = { injectBodyParams };
