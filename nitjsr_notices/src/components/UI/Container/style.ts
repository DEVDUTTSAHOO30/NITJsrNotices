import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div<{ fullWidth?: boolean; noGutter?: boolean; width?: string; mobileGutter?: boolean }>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;

  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${(props) => "1170px"};
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default ContainerWrapper;
