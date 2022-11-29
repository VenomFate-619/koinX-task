import React from "react";
import starIcon from "@src/assets/star.svg";
import CoinTable from "@src/components/coinTable";
import useFetchPagination from "@src/hooks/useFetchPagination";
import ReactPaginate from "react-paginate";
import leftArrow from "@src/assets/leftPage.svg";
import rightArrow from "@src/assets/rightPage.svg";

const option = [
  { value: 10, text: "10" },
  { value: 50, text: "50" },
  { value: 100, text: "100" },
];

const CoinInfo = () => {
    const { data, handlePage, loading, perPage, setPerPage } =
      useFetchPagination();

    const handlePerPage =event => {
    setPerPage(event.target.value);
    handlePage(undefined , event.target.value)
  };

  return (
    <>
      <div>
        <p className="font-bold md:text-2xl text-xl">
          Top 100 Cryptocurrencies by Market Cap
        </p>
        <div className="space-x-4 flex mt-8">
          <span className="text-black md:flex hidden items-center gap-x-1  p-2 bg-pillBg rounded-lg  text-xs font-semibold">
            <img src={starIcon} className="inline" alt="star" />
            <span>Favourites</span>
          </span>
          <span className="text-[#3861FB] md:inline hidden p-2 bg-pillBg rounded-lg  text-xs font-semibold">
            CryptoCurrencies
          </span>
          <span className="bg-gray2 p-2  md:inline hidden bg-pillBg rounded-lg text-gray-600 text-xs font-semibold">
            DeFi
          </span>
          <span className="bg-gray2 p-2 md:inline hidden bg-pillBg rounded-lg text-gray-600 text-xs font-semibold">
            NFTs & Collectibles
          </span>
          <div className="!ml-auto md:block hidden">
            <span className="text-sm text-gray-600 mr-1 ">show rows</span>
            <select
              className="rounded-lg p-2"
              value={perPage}
              onChange={handlePerPage}
            >
              {option.map((x) => (
                <option key={x.value}>{x.text}</option>
              ))}
            </select>
          </div>
        </div>
        <CoinTable data={data} loading={loading} />
      </div>
      <div className="flex justify-center" >

      <ReactPaginate
        nextLabel={<img src={rightArrow} alt="right" />}
        previousLabel={<img src={leftArrow} alt="left" />}
        breakLabel="..."
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={10} // api not returning total number of pages
        onPageChange={({ selected }) => {
          handlePage(selected + 1);
        }}
        containerClassName="flex md:justify-end justify-center space-x-2  font-bold text-sm mt-10 mb-12"
        pageClassName="w-8 h-8 rounded border flex justify-center items-center"
        activeClassName="border-[#0052FE] text-[#0052FE]"
        breakClassName="flex items-center justify-center w-8 h-8  rounded border"
        nextClassName="flex items-center justify-center w-8 h-8  rounded border  text-secondary"
        previousClassName="flex items-center justify-center w-8 h-8 rounded  border  text-secondary"
        disabledClassName="bg-[#919EAB] opacity-50"
      />
      </div>
    </>
  );
};

export default CoinInfo;
