import NavBar from "@src/components/navbar";
import CarosuelContainer from "@src/components/carosuelContainer";
import CoinInfo from "@src/components/coinInfo";
function App() {
  return (
    <>
      <NavBar />
      <div className="mt-8 mb-6 px-[5%]">
        <CarosuelContainer />
      </div>
      <div className="md:px-[10%] px-4">
        <CoinInfo />
      </div>
    </>
  );
}

export default App;
