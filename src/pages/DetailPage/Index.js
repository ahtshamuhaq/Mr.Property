import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchListingDetails } from "../../api/index";

const DetailPage = () => {
  const { id } = useParams();
  const [listingDetails, setListingDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const details = await fetchListingDetails(parseInt(id));
      setListingDetails(details);
    }

    fetchDetails();
  }, [id]);

  if (!listingDetails) return <div>Loading...</div>;

  return (
    <div className="bg-[#3D2B3D] min-h-screen flex pt-4 flex-col items-center justify-center ">
      <Link
        to="/"
        className="inline-flex items-center px-3 py-2  mb-3 text-sm font-medium text-center text-white bg-[#6C4B6C] rounded-lg hover:bg-[#472f47] focus:ring-4 focus:outline-none"
      >
        Back To Home{" "}
      </Link>
      <div className="max-w-2xl mx-auto pt-8 p-6 bg-white rounded-lg shadow-md text-white dark:bg-[#6C4B6C]">
        <img
          src={listingDetails.imageUrl}
          alt={listingDetails.title}
          className="rounded-t-lg w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">
            {listingDetails.title}
          </h2>
          <p className="mb-2">
            <span className="font-bold">Address:</span> {listingDetails.address}
          </p>
          <p className="mb-2">
            <span className="font-bold">Price:</span> Rs {listingDetails.price}
          </p>
          <p className="mb-2">
            <span className="font-bold">Covered Area:</span>{" "}
            {listingDetails.coveredAreaSQFT} SQFT
          </p>
          <p className="mb-2">
            <span className="font-bold">Property Type:</span>{" "}
            {listingDetails.propertyType}
          </p>
          <p className="mb-2">
            <span className="font-bold">Is Commercial:</span>{" "}
            {listingDetails.isCommercial ? "Yes" : "No"}
          </p>
          {listingDetails.beds && (
            <p className="mb-2">
              <span className="font-bold">Beds:</span> {listingDetails.beds}
            </p>
          )}
          {listingDetails.bath && (
            <p className="mb-2">
              <span className="font-bold">Bath:</span> {listingDetails.bath}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
