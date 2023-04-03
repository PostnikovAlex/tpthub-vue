import axios from "axios";

const instance = axios.create({
  baseURL: "https://cat-fact.herokuapp.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Ifact {
  status: IStatus;
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  type: string;
  createdAt: string;
  deleted: boolean;
  used: boolean;
}

interface IStatus {
  verified: boolean;
  sentCount: number;
}

export const fetchFacts = async (): Promise<Array<Ifact>> => {
  try {
    const response = await instance.get("/facts");
    return response.data;
  } catch (error) {
    throw new Error("");
  }
};

export const fetchFact = async (factId: string): Promise<Ifact> => {
  try {
    const response = await instance.get(`/facts/${factId}`);
    return response.data;
  } catch (error) {
    throw new Error("");
  }
};
