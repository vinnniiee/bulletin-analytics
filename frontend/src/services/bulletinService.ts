import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Resources } from "../enums/resources";
import { BarChartItem } from "../components/PestleChart";
// import { apiUrl } from "./apiUrl";

export type Resource = {
  name: string;
  count: number;
};

export type Bulletin = {
  _id: string;
  end_year: string | number;
  intensity: number;
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: string;
  impact: number | null;
  added: Date | null;
  published: Date | null;
  country: string;
  relevance: number;
  pestle: string;
  source: string;
  title: string;
  likelihood: number;
  __v: number;
};

export type ChronicData = {
  date: Date;
  items: Bulletin[];
};

const bulletinsApi: AxiosInstance = axios.create({
  baseURL: "/bulletins",
  headers: {
    Accept: "application/json",
  },
});

export const getBulletins = async (): Promise<Bulletin[] | undefined> => {
  try {
    const response: AxiosResponse<Bulletin[], unknown> = await bulletinsApi.get(
      ""
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getBulletinsByDate = async (): Promise<
  ChronicData[] | undefined
> => {
  try {
    const response: AxiosResponse<ChronicData[], unknown> =
      await bulletinsApi.get("chronic");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSectors = async () => {
  try {
    const response = await bulletinsApi.get("/sectors");
    return { sectors: response.data };
  } catch (e) {
    console.log(e);
  }
};

export const getResources = async (resource: Resources) => {
  try {
    console.log("Resource:", resource);
    const response: AxiosResponse<BarChartItem[], unknown> =
      await bulletinsApi.get(`/${resource}`);
    console.log("Response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getTopics = async () => {
  try {
    const response = await bulletinsApi.get("/topics");
    return { topics: response.data };
  } catch (e) {
    console.log(e);
  }
};
export const getPestles = async () => {
  try {
    const response = await bulletinsApi.get("/pestles");
    return { pestles: response.data };
  } catch (e) {
    console.log(e);
  }
};

export const getRegions = async () => {
  try {
    const response = await bulletinsApi.get("/regions");
    return { regions: response.data };
  } catch (e) {
    console.log(e);
  }
};

export const getSources = async () => {
  try {
    const response = await bulletinsApi.get("/sources");
    return { sources: response.data };
  } catch (e) {
    console.log(e);
  }
};

export const getCountries = async () => {
  try {
    const response = await bulletinsApi.get("/countries");
    return { countries: response.data };
  } catch (e) {
    console.log(e);
  }
};
