import Image from "next/image";
import Header from "./components/Header";
import Listing from "./components/Listing";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <div className="mx-11 my-8">
          <Listing />
        </div>
      </div>
    </>
  );
}
