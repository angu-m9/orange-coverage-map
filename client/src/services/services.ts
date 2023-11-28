import { FieldValues } from "react-hook-form";
import {
  CompaniesInterface,
  ListInterface,
  ServicesInterface,
  adminsEndpoint,
  companiesEndPoint,
  dataListEndpoint,
  networkQualityEndpoint,
  registerEndPoint
} from "./service.module";

export class Services implements ServicesInterface {
  constructor() {}


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

  //✅
  async getDataList(): Promise<{ response: ListInterface[] } | undefined> {
    try {
      const authHeader = localStorage.getItem('token');
      const data = await fetch(dataListEndpoint, { method: "GET",
      headers: { "content-type": "application/json", "authorization": authHeader ?? '' }}  );
      const response: ListInterface[] = await data.json();
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
        console.log(response)
  
        localStorage.setItem("token", response.token);

        if (response.message === "Invalid Username or Password") {
          return false;
        } else {
          return true;
        }
        
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    }

    
    async getNetworkModeByCity(city: string): Promise<{ networkMode: string, frequency: number }> {
      try {
        const baseUrl = import.meta.env.VITE_NETWORK_MODE_ENDPOINT; 
        const url = new URL(`${baseUrl}/${city}`, baseUrl);
        const authHeader = localStorage.getItem('token');
        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'authorization': authHeader ?? '' },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching network mode by city:', error);
        throw error;
      }
    }
  
    async getCitiesByNetworkType(networkType: string): Promise<{ cityName: string, networkType: string }[]> {
      try {
        const baseUrl = import.meta.env.VITE_NETWORK_MODE_ENDPOINT; // Asegúrate de que esta variable tenga el valor correcto
        const url = new URL(`/cities/${networkType}`, baseUrl); // Corrige la concatenación aquí
        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching cities by network type:', error);
        throw error;
      }
    }
  
}

export const services = new Services();
