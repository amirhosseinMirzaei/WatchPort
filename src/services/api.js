

const BASE_URL="https://api.watchmode.com/v1/"
const apiKey="mOtPAzb8xxboyECzzhn7AQV2IwAkTG1627UvA7fP"



export const getSources = async () => {
  const response = await fetch(`${BASE_URL}sources/?apiKey=${apiKey}`);
  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await response.json();

  return json;
};




