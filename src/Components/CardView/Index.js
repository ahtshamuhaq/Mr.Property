import React, { useState, useEffect } from "react";
import { fetchListings } from "../../api/index";
import { Link } from "react-router-dom";

const Index = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedListings = await fetchListings();
      setListings(fetchedListings);
    }

    fetchData();
  }, []);

  return (
    <div className="w-3/4 sm:w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3  sm:grid-cols-2 gap-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-primary dark:border-gray-700"
        >
          <img
            className="rounded-t-lg h-60 w-full"
            src={listing.imageUrl}
            alt={listing.title}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {listing.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-white">
              {listing.address}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-white">
              Rs {listing.price}
            </p>
            <Link
              to={`/listing/${listing.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-[#472f47] focus:ring-4 focus:outline-none"
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
