export interface List {
  id: number;
  date: string;
  red: string;
  Company: string;
  Location: string;
}

export interface ListData {
    dataList: List
}

export interface ListAdmins {
    admin_name:string,
    admin_password: string,
    id: number
  }