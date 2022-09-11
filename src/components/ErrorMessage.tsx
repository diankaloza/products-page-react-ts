import React from "react";

interface ErrorMessagePrors {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessagePrors) {
  return <p className="text-center"> {error}</p>;
}
