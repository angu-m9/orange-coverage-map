import { FieldValues } from "react-hook-form";
import {
  CompaniesInterface,
  ListInterface,
  ServicesInterface,
  adminsEndpoint,
  companiesEndPoint,
  dataListEndpoint,
  networkQualityEndpoint,
  registerEndPoint,
} from "./service.module";

export class Services implements ServicesInterface {
  constructor() {}

  //✅
  async getDataList(): Promise<{ response: ListInterface[] } | undefined> {
    try {
      const data = await fetch(dataListEndpoint);
      const response: ListInterface[] = await data.json();
      console.log(response)
      return { response };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //✅
  async getCompanies(): Promise<{ response: CompaniesInterface[] } | undefined> {
    try {
      const data = await fetch(companiesEndPoint);
      const response: CompaniesInterface[] = await data.json();
      console.log(response)
      return { response };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  //✅
  async postDataList(
    body: FieldValues
  ): Promise<ListInterface | undefined | boolean> {
    try {
      const data = await fetch(networkQualityEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const response: ListInterface = await data.json();
      
      if (response) {
        return response;
      } else {
        return false
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
      throw new Error(error.message);
    }
    }
  }

    //✅
    async postLoginAdmin(
      body: FieldValues
    ): Promise<FieldValues | undefined | boolean> {
      try {
        const data = await fetch(adminsEndpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(body),
        });
        const response = await data.json();
  
        localStorage.setItem("token", response.token);
  
        if (response) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    }

  //✅
  async postRegisterUser(body: FieldValues): Promise<FieldValues | undefined> {
    try {
      const data = await fetch(registerEndPoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const response: FieldValues = await data.json();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  
}

export const services = new Services();
