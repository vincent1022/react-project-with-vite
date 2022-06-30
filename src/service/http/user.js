import req from "./api";

export const getUser = () => {
  return req("get", "/O-A0003-001?Authorization=CWB-DEC56B69-8174-4228-A363-52563986713E&limit=20&format=JSON")
}
