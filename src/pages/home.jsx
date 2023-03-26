import React from "react";
import Image from "next/image";
import Link from 'next/link'


const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/512/397/397144.png?w=740&t=st=1679815931~exp=1679816531~hmac=cfbfbfac3855233684bd4f8cb6275a8aad040d211ffe7365b4080538dfa9a944}`;
};

const myLoader1 = ({ src, width, quality }) => {
  return `https://img.freepik.com/free-vector/barcode-concept-illustration_114360-7032.jpg?w=740&t=st=1679816455~exp=1679817055~hmac=5c6c66e90528962d16594c0b091c8ea07c907069d0039ee557b496403ea0637e`;
};

function home() {
  return (
    <div className="container mx-auto">
      <div className="text-center ">
        <h1 className="text-5xl font-semibold"> React bar code scanner</h1>
      </div>
      <div className="flex justify-center py-10">
        <div className="grid h-56 grid-cols-2 place-items-center ">
          <div className="place-content-center">
          <Link href="/barcodegenerator">barcodegenertor
            <Image
              loader={myLoader}   
              src="me.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            </Link>
          </div>
          <div>
            <div className="">
              <Image
                loader={myLoader1}
                src="me.png"
                alt="Picture of the author"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
