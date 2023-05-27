import React from "react";
import BaseForm from "./forms/logon";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/3 bg-sky-500">
        <div
          className="h-full flex flex-col items-center justify-center text-5xl"
          style={{ fontFamily: "Caveat" }}
        >
          {" "}
          <h1 className="font-bold text-4xl"> Rebase Academy</h1>
          <span className="text-5xl"> React Dashboard project</span>
        </div>
      </div>

      <div className="w-2/3 flex items-center justify-center ">
        <div>
          {" "}
          <BaseForm />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
