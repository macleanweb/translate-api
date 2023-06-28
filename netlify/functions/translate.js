const deepl = require('deepl-node');
const handlePreflightRequest = require('../utils/handlePreflightRequest');

exports.handler = async function(event) {
  // Check if it's a preflight request
  if (event.httpMethod === 'OPTIONS') {
    handlePreflightRequest();
  }

  try {
    const {
      apiKey,
      text, 
      targetLanguage, 
      options = {}
    } = JSON.parse(event.body);
    const translator = new deepl.Translator(apiKey);
    const data = await translator.translateText(text, null, targetLanguage, options);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
