import React from "react";
import HighLightText from "./HighLightText";
 


 
export default function MDBFooter() {
  return (
   <>
      <div className="w-[100%] flex flex-row text-md bg-gray-200 mt-16 text-center gap-4 items-center justify-center">
              <div className="text-center items-center">
                2024 Merdul Sharma. All rights reserved.
              </div>
              <div className="text-center items-center">
                <HighLightText text={"ECOZMY"}/>
              </div>
      </div>


   </>
  );
}
