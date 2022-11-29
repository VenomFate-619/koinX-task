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
      <div className="px-[10%]">
        <CoinInfo />
      </div>
    </>
  );
}

export default App;
