"use client";

import DatePicker from "@/components/DatePicker";
import { Trip } from "@prisma/client";
import Input from "@/components/Input";
import React from "react";
import Button from "@/components/Button";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: string;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservationForm>();

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória.",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              placeholderText="Data de Início"
              onChange={() => {}}
              className="w-full"
            />
          )}
        />

        <DatePicker
          placeholderText="Data Final"
          onChange={() => {}}
          className="w-full"
        />
      </div>
      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Você precisa informar a quantidade de hóspedes.",
          },
        })}
        placeholder={`Número de hóspedes(max:${trip.maxGuests})`}
        className="mt-4"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total:</p>
        <p className="font-medium text-sm text-primaryDarker">R$2500</p>
      </div>
      <div className="pb-10 border-b border-b-grayLighter w-full">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          variant="primary"
          className="mt-3 w-full"
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
