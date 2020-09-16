import React from "react";
import { useForm } from "react-hook-form";

const Jesus = () => {
  const { register, handleSubmit, error } = useForm();

  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default Jesus;
