"use client";

const FilterError = ({ error }) => {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </>
  );
};

export default FilterError;
