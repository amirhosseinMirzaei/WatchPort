

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

export const searchTitles = async (query) => {
  const res = await fetch(
    `${BASE_URL}search/?apiKey=${apiKey}&search_field=name&search_value=${encodeURIComponent(
      query
    )}`
  );
  const json = await res.json();
  return (json.title_results || []).map((item) => ({
    id: item.id,
    name: item.name,
    year: item.year,
    type: item.type,
  }));
};

export const fetchInitialTitles = async () => {
  const res = await fetch(
    `${BASE_URL}list-titles/?apiKey=${apiKey}&type=movie&limit=20`
  );
  const json = await res.json();
  return (json.titles || []).map((item) => ({
    id: item.id,
    name: item.name,
    year: item.year,
    type: item.type,
  }));
};
export async function autocompleteSearch(searchValue, searchType = 1) {
  if (!searchValue.trim()) return [];

  const url = `${BASE_URL}autocomplete-search/?apiKey=${apiKey}&search_value=${encodeURIComponent(searchValue)}&search_type=${searchType}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.results || [];
  } catch (error) {
    console.error("خطا در جستجوی autocomplete:", error);
    return [];
  }}


 
  
  export const GetDetail = async (titleId)  => {
   
 const url= `${BASE_URL}title/${titleId}/details/?apiKey=${apiKey}`;
 const response = await fetch(url);
 const json = await response.json();
 return json;

  }
  




