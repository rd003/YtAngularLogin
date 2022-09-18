import { status } from "./status";

export interface loginResponse extends status{
  name:string,
  username:string,
  token:string,
  expiration:string
}