import * as deepl from 'deepl-node';

exports.handler = async function(event, context) {
  console.log(event, context);
  try {
    const payload = JSON.parse(event.body);
    console.log(payload);
    // const API_KEY = process.env.DEEPL_API_KEY;
    // const urlSearchParams = new URLSearchParams();

    // Object.keys(payload).forEach(key => {
    //     urlSearchParams.append(key, payload[key]);
    // });

    // const urlEncodedBody = urlSearchParams.toString();
    // const url = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&${urlEncodedBody}`;

    // const response = await fetch(url);

    // if (!response.ok) {
    //   throw new Error('Translation request failed');
    // }

    // const data = await response.json();

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
