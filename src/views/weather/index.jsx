import React,{ useEffect,useState } from 'react'
import { getUser } from "../../service/http/user"
import './index.css'

export default function Index() {

  useEffect(() => {
    aaa()
  }, [])

  const aaa = async () => {
    await getUser()
  }

  return (
    <>
      <div className="wrapper">
        <h1>現在天氣</h1>
        {/*{data && data.map((x, index) =>*/}
        {/*  <div key={index}>*/}
        {/*    <div className="location-title">地區-{x.locationName}</div>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </>
  );
}