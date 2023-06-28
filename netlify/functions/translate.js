import * as deepl from 'deepl-node';

exports.handler = async function(event, context) {
  console.log(event, context);
  try {
    const payload = JSON.parse(event.body);
    console.log(payload);
    const API_KEY = process.env.DEEPL_API_KEY;
    const translator = new deepl.Translator(API_KEY);
    const data = await translator.translate(payload.text, payload.targetLanguage);

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
