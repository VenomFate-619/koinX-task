import React from "react";
import starIcon from "@src/assets/star.svg";
import downArrow from "@src/assets/downArrow.svg";
import downArrowRed from "@src/assets/downArrowRed.svg";
import upArrowGreen from "@src/assets/upArrowGreen.svg";
import menuIcon from "@src/assets/menu.svg";
import { useMobileScreen } from "@src/hooks/useMobileScreen";

let theads = [
  () => "name",
  () => "price",
  () => (
    <>
      24H <img src={downArrow} className="inline" />
    </>
  ),
  () => "7d",
  () => "market cap",
  () => "volume(24H)",
  () => "CIRCULATING SUPPLY",
];

const NameOfCoin = ({ name, sym, src }) => {
  return (
    <div className="flex items-center gap-x-1">
      <img src={src} className="w-6 h-6" />
      <span className="font-semibold text-sm text-[#222531] capitalize ">
        {name}
      </span>
      <span className="font-semibold text-sm text-[#808A9D] uppercase ">
        {sym}
      </span>
    </div>
  );
};

const CoinTable = ({ loading, data }) => {
  const isMobile = useMobileScreen()
  theads = isMobile ? theads.slice(0,3) : theads
  return (
    <>
      <div className="mt-5">
        <table class="w-full">
          <thead className="border-b">
            <tr>
              <th></th>
              {
                !isMobile &&
              <th className="font-semibold capitalize text-xs text-center px-6 py-4">
                #
              </th>
              }
              {theads.map((x, i) => (
                <th
                  key={i}
                  className={`font-semibold capitalize text-xs md:px-6 px-2 py-4  ${
                    i === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {x()}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              data.map((x, i) => (
                <tr className="border-b" key={x.id}>
                  <td className="">
                    <img src={starIcon} className="max-w-none" alt="star" />
                  </td>
                  {
                    !isMobile && 
                  <td className="font-medium text-[15px] text-secondary text-center ">
                    {i + 1}
                  </td>
                  }
                  <td className="py-7 md:px-6 px-4">
                    <NameOfCoin name={x?.name} sym={x?.symbol} src={x?.image} />
                  </td>
                  <td className="font-medium md:px-6 px-4">
                    ${x?.current_price.toLocaleString()}
                  </td>
                  <td>
                    <div className="font-semibold  text-[13px] text-decreaseRed flex items-center md:px-6 px-4">
                      <img
                        src={downArrowRed}
                        className="inline mr-1"
                        alt="star"
                      />
                      <span>0.65%</span>
                    </div>
                  </td>
                  {!isMobile && (
                    <>
                      <td>
                        <div className="font-semibold flex items-center text-[13px] text-increaseGreen  md:px-6 px-4">
                          <img
                            src={upArrowGreen}
                            className="inline mr-1"
                            alt="star"
                          />
                          <span>0.65%</span>
                        </div>
                      </td>
                      <td className="text-sm font-medium md:px-6 px-4">
                        ${x?.market_cap.toLocaleString()}
                      </td>

                      <td className="md:px-6 px-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            $51,502,989,963,439
                          </span>
                          <span className="font-medium text-right  text-xs opacity-50">
                            932,071 BTC
                          </span>
                        </div>
                      </td>

                      <td className="md:px-6 px-4">
                        <div className="flex flex-col gap-y-1">
                          <span className="text-sm text-right font-medium">
                            {x?.circulating_supply}BTC
                          </span>
                          <div className="w-full h-[6px] bg-[#EFF2F5] relative rounded">
                            <div className="bg-[#CFD6E4] h-full rounded absolute inset-0 w-[50%]" />
                          </div>
                        </div>
                      </td>

                      <td className="">
                        <img src={menuIcon} className="max-w-none" alt="menu" />
                      </td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoinTable;
