import React, { useEffect } from "react";
import styled from "styled-components";
import Heroindex from "../components/home/hero";
import { Meta } from "../components/common";
import Selectionindex from "../components/home/selection";

export default function Home() {
  return (
    <>
      <Meta />

      <HomeContainer>
        <>
          <Heroindex />
          <Selectionindex/>
        </>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  /* background: #fff; */
`;
