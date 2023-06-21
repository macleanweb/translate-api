exports.handler = async function(event, context) {
  console.log(event, context);
  try {
    const { text, targetLanguage } = JSON.parse(event.body);
    const API_KEY = process.env.DEEPL_API_KEY;

    const response = await fetch(
      `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(
        text
      )}&target_lang=${targetLanguage}`
    );

    if (!response.ok) {
      throw new Error('Translation request failed');
    }

    const data = await response.json();

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
