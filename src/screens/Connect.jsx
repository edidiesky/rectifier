import React, { useEffect } from "react";
import styled from "styled-components";
import { Meta } from "../components/common";
import Connect from "../components/modals/connect";

export default function ConnectModal() {
  return (
    <>
      <Meta />

      <HomeContainer className="flex item-center justify-center">
        <Connect />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;
