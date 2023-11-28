import { FieldValues } from "react-hook-form";

export interface ListInterface {
  network: null;
  userUuid: string | null;
  online: boolean;
  downlink: null;
  downlinkMax: null;
  effectiveType: null;
  rtt: null;
  type: null;
  uuid: string;
  latitude: number;
  longitude: number;
  created_at?: string;
}

export interface CompaniesInterface{
    company_id: number;
    company_name: string;
}

export interface RegisterInterface {
  id: number; //backend
  user_name: string;
  user_lastname: string;
  cellular_carrier: string; //backend
  postal_code: number;
  created_at: Date; //backend
}

export interface AdminInterface {
  admin_name: string;
  admin_password: string;
}

export interface ServicesInterface {
  postLoginAdmin: (
    body: FieldValues
  ) => Promise<FieldValues | undefined | boolean>;

  postDataList: (
    body: FieldValues
  ) => Promise<ListInterface | undefined | boolean>;

  postRegisterUser: (body: FieldValues) => Promise<FieldValues | undefined>;

  getDataList: () => Promise<{ response: ListInterface[] } | undefined>;

  getCompanies: () => Promise<{ response: CompaniesInterface[] } | undefined>;

  getNetworkModeByCity: (city: string) => Promise<{ networkMode: string, frequency: number }>;

  getCitiesByNetworkType: (networkType: string) => Promise<{ cityName: string, networkType: string }[]>;
}

export const dataListEndpoint = import.meta.env.VITE_DATA_LIST;
export const adminsEndpoint = import.meta.env.VITE_ADMINS;
export const networkQualityEndpoint = import.meta.env.VITE_NETWORK_QUALITY;
export const registerEndPoint = import.meta.env.VITE_REGISTER_USER;
export const companiesEndPoint = import.meta.env.VITE_COMPANIES;
export const networkModeEndpoint = import.meta.env.VITE_NETWORK_MODE_ENDPOINT;
