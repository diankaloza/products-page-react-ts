import axios from "axios";
import { count } from "console";
import React from "react";
import { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem dffv oro",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 10,
    count: 10,
  },
};

interface createProductsProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: createProductsProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    productData.title = value;

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:bg-yellow-200"
      >
        Create
      </button>
    </form>
  );
};
