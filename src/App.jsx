import { useContext } from "react";
import "./App.css";
import Input from "./components/Input";
import ImageScreen from "./components/ImageScreen";
import Context from "./context/Context";

function App() {
  const { images } = useContext(Context);

  return (
    <>
      <div className="h-screen w-screen bg-[url('https://cache.desktopnexus.com/thumbseg/1371/1371785-bigthumbnail.jpg')] bg-no-repeat bg-repeat-y bg-center bg-cover">
        <div className="flex justify-center">
          <div
            className="box sm:m-6 mb-3 h-fit p-6 rounded-md mt-10 flex flex-col items-center justify-between"
            style={{ backgroundColor: "rgba(125,125,125,50%)" }}
          >
            <h1 className=" mb-3 text-center text-white font-medium text-4xl sm:mb-6 mt-0">
              Save Your Images Here
            </h1>
            <Input />
          </div>
        </div>
        <div style={{ backgroundColor: "rgba(149,149,149,29%)" }} className='flex flex-wrap m-6 mt-0 justify-center items-center'>
          {images &&
            images.map((image) => {
              return <ImageScreen key={image.id} id={image.id} imageURL={image.imageURL} />
            })}
        </div>
      </div>
    </>
  );
}

export default App;
