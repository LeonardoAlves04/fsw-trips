"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const TripConfirmation = ({ params }: { params: { tripId: string } }) => {
  const [trip, setTrip] = useState();

  const searchParams = useSearchParams();
  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`http://localhost:3000/api/trips//check`, {
        method: "POST",
        body: JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        }),
      });

      const { trip } = await response.json();

      setTrip(trip);
    };

    fetchTrip();
  }, []);

  if (!trip) return null;

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-xl text-primaryDarker">Sua viagem</h1>

      <div className="flex flex-col">
        <div className="relative h-[106px] w-[124px]"></div>
      </div>
    </div>
  );
};

export default TripConfirmation;
