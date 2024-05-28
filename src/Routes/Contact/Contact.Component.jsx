import React from "react";

const Contact = () => {
  return (
    <div className="mx-40 max-sm:mx-0 text-left relative">
      <h1 className="text-4xl font-bold p-8 w-72 max-sm:w-auto h-24 bg-white absolute top-10 z-10 left-28">Contact</h1>
      <div className="bg-[#f7ede2] w-full h-72 mt-16 absolute">
        <div className="mt-24 mx-16 flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <a className="underline" href="*">mail@gmail.com</a>
          <a className="underline" href="*">28 Eletu Odibo Street, Lagos State</a>
          <a href="*">0800000000  </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;


