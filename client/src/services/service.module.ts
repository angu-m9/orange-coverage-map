import { FieldValues } from "react-hook-form";

export interface ListInterface {
 id: number,
  network: string,
  created_at: Date,
  latitude: number,
  longitude: number,
  rtt: number,
  downlink: number,
}

export interface ResponseListInterface {
    response: ListInterface[]
}

export interface RegisterInterface {
    id: number, //backend
    user_name: string, 
    user_lastname: string,
    cellular_carrier: string, //backend 
    postal_code: number, 
    created_at: Date, //backend
}


export interface AdminInterface {
    admin_name: string,
    admin_password: string,
}


// export interface ServicesInterface {
//     getDataList: () => Promise<ResponseListInterface | undefined>,
//     postLoginAdmin: (body) =>{},
//     postDataList: (body: ListInterface) => Promise<ListInterface | undefined>,
//     postRegisterUser: (body: FieldValues) => Promise<FieldValues | undefined>,
// }



export const dataListEndpoint = import.meta.env.VITE_DATA_LIST;
export const adminsEndpoint = import.meta.env.VITE_ADMINS;
export const networkQualityEndpoint = import.meta.env.VITE_NETWORK_QUALITY;
export const registerEndPoint = import.meta.env.VITE_REGISTER_USER







