import axios from "axios";
import { Feature } from "geojson";
// import { apiUrl } from "./apiUrl";
// import { feature } from "topojson";

// const apiUrl = import.meta.env.VITE_API_URL;

const mapApi = axios.create({
  baseURL: "/map",
  headers: {
    Accept: "application/json",
  },
});

export const getMapFeatures = async () => {
  const response = await mapApi.get("");
  console.log("response", response);

  //   const { countries } = response.data.objects;
  const features = response.data.features as unknown as Feature[];
  return features;
};
