export async function GET(request) {
  // Get your API key from environment variables
  const apiKey = process.env.CRIMEOMETER_API_KEY;

  // The same link as in your original script
  const url = 'https://api.crimeometer.com/v1/incidents/raw-data?lat=42.719296&lon=-84.424918&datetime_ini=2020-01-01%2000:00:00&datetime_end=2020-12-31%2000:00:00&distance=2mi&page=1';

  // Make the request to Crimeometer
  const response = await fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  });

  // If the API request failed, forward the error
  if (!response.ok) {
    return new Response(JSON.stringify({
      message: `Crimeometer API request failed with status ${response.status}`,
    }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Get the response data as JSON
  const data = await response.json();

  // Return the data to your frontend
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
