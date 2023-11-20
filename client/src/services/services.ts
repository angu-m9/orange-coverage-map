import { FieldValues } from "react-hook-form";
import {
  ListInterface,
  ResponseListInterface,
  ServicesInterface,
  adminsEndpoint,
  dataListEndpoint,
  networkQualityEndpoint,
  registerEndPoint,
} from "./service.module";


export class Services implements ServicesInterface {
  constructor() {}

  //registrar usuario
  async postRegisterUser(body: FieldValues): Promise<FieldValues | undefined> {
    try {
      const data = await fetch(registerEndPoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const response: FieldValues = await data.json();
      return response as FieldValues;
    } catch (error) {
      if (typeof error === 'string') {
        throw new Error(error); 
      }
    }
  }

  //obtener datos de la lista
  async getDataList(): Promise<ResponseListInterface | undefined> {
    try {
      const data = await fetch(dataListEndpoint);
      const { response }: ResponseListInterface = await data.json();
      return { response } as ResponseListInterface;
    } catch (error) {
      if (typeof error === 'string') {
        throw new Error(error); 
      }
    }
  }

  //enviar login de los admin
  async postLoginAdmin(body: FieldValues): Promise<FieldValues | undefined> {
    try {
      const data = await fetch(adminsEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const response: FieldValues = await data.json();
      return response as FieldValues;
    } catch (error) {
      if (typeof error === 'string') {
        throw new Error(error); 
      }
    }
  }

  //enviar datos de la lista
  async postDataList(body: ListInterface): Promise<ListInterface | undefined> {
    try {
      const data = await fetch(networkQualityEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const response: ListInterface = await data.json();

      return response as ListInterface;
    } catch (error) {
      if (typeof error === 'string') {
        throw new Error(error); 
      }
    }
  }
}

export const services = new Services();