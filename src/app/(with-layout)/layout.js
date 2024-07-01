import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <nav href="/"> Nav</nav>

      {children}

      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
