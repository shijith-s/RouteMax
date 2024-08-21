const ROUTES_DATA = "routes.json";
const STOPS_DATA = "stops.json";

export async function loadData(FILE) {
  const data = await import(`./${FILE}`);
  return data.default; // Assuming the JSON file uses ES modules
}

export const extractRoutesData = async () => {
  try {
    const data = await loadData(ROUTES_DATA);
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ${ROUTES_DATA}`, error);
    throw error; // Optionally, re-throw the error for the calling code to handle
  }
};

export const extractStopsData = async () => {
  try {
    const data = await loadData(STOPS_DATA);
    return data;
  } catch (error) {
    console.error(`An error occurred while loading ${STOPS_DATA}`, error);
    throw error; // Optionally, re-throw the error for the calling code to handle
  }
};
