// import React from "react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Header from "../components/common/Header";

export default function Layout() {
  const [click, setClick] = useState(false);
  const handleClose = () => {
    setClick(false);
  };
  return (
    <LayoutContainer>
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {click && <Delete Click={click} handleClose={handleClose} />}
      </AnimatePresence>
      <Outlet />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: var(--primary);
`;
