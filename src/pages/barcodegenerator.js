import React, { useState, useRef, useEffect } from "react";

// var Barcode = require('react-barcode');
import { useBarcode } from "@createnextapp/react-barcode";

export default function barcodegrnerator() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [barcode, setBarcode] = useState("E.g Iphone");


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { inputRef } = useBarcode({
    value: barcode,
    options: {
      displayValue: false,
      background: "#ffffff",
    },
  });


  

  const downloadBarcode = () => {
    const canvas = document.getElementById("mybarcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "mybarcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container mx-auto bg-zinc-50">
      <div className="py-5 text-center">
        <h1 className="text-5xl">Barcode Generator</h1>
      </div>
      <div>
        <div className="col-span-2 lg:col-span-1"></div>
        
          <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              onChange={(e) => setBarcode(e.target.value)}
              name="barcode"
              className="w-full p-3 border-2 border-gray-400 border-solid md:text-xl"
            />
          </div>
         
        
        <div>
          {barcode !== "" ? (
            <canvas id="mybarcode" ref={inputRef} />
          ) : (
            <p>No barcode preview</p>
          )}
        </div>
        <div>
        {barcode ? (
          <div container style={{ marginTop: 30 }}>
          
            <button > 
              <div
                onClick={downloadBarcode}
                style={{ marginLeft: 10 }}
                color="secondary"
              >
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"/></svg>
              </div>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      </div>
    </div>
  );
}
