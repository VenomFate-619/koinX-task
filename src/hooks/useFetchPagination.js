import { useEffect, useState } from "react";
import axios from "axios";

const getUrl = (page, perPage) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=${perPage}&amp;page=${page}&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`;

const useFetchPagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=10&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  //   comingPage will the required page needed
  const handlePage = async (comingPage , requiredItem) => {
    setPage(comingPage);
    try {
      setLoading(true);
      const { data } = await axios.get(getUrl(comingPage ? comingPage : page, requiredItem ? requiredItem :  perPage));
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return {
    data,
    handlePage,
    loading,
    currentPage:page,
    perPage,
    setPerPage
  };
};


export default useFetchPagination