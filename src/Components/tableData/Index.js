import React, { useState, useEffect } from "react";
import { fetchListings } from "../../api/index";
import { Link } from "react-router-dom";

const Index = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);
  const [sortType, setSortType] = useState("default");

  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      const fetchedListings = await fetchListings();
      setListings(fetchedListings);
      setFilteredListings(fetchedListings);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = listings.filter((listing) =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortType === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredListings(filtered);
    setCurrentPage(1);
  }, [searchTerm, sortType, listings]);

  const displayedListings = filteredListings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="text-white w-11/12 mx-auto mt-10">
      <div className="flex-col sm:flex-row  flex justify-between">
        <input
          type="text"
          placeholder="Search by title..."
          className="bg-[#241924] p-2 mb-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className=" border-none  ml-auto mb-2 bg-[#241924] rounded-md p-2"
        >
          <option value="default">Default</option>
          <option value="asc">Ascending Price</option>
          <option value="desc" className="pb-3">
            Descending Price
          </option>
        </select>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-[#241924] dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Property Type
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedListings.map((listing) => (
              <tr
                key={listing.id}
                className="bg-white border-b mt-3 dark:bg-[#6C4B6C] dark:border-gray-700 hover:bg-[#472f47]"
              >
                <th
                  scope="row"
                  className="px-6 py-4  font-medium text-white whitespace-nowrap dark:text-white"
                >
                  {listing.title}
                </th>
                <td className="px-6 py-4 text-white">{listing.propertyType}</td>
                <td className="px-6 py-4 text-white">{listing.price}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/listing/${listing.id}`}
                    className="font-medium text-white"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex mt-3 items-center justify-center pb-10">
        {[
          ...Array(Math.ceil(filteredListings.length / itemsPerPage)).keys(),
        ].map((num) => (
          <button
            key={num}
            className={
              currentPage === num + 1
                ? "bg-[#6C4B6C] ml-2 h-6 w-6 rounded-full flex justify-center items-center text-white"
                : " bg-[#6C4B6C] ml-2 h-6 w-6 rounded-full flex justify-center items-center text-white"
            }
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Index;
