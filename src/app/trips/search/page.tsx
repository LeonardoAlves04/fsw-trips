"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Trips = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `/api/trips/search?text=${
          searchParams.get("text") ?? ""
        }&startDate=${searchParams.get("startDate")}&budget=${searchParams.get(
          "budget"
        )}`
      );

      const data = await response.json();

      console.log({ data });
    };

    fetchTrips();
  }, []);

  return <div>Trips </div>;
};
