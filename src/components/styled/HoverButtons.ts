import styled from "styled-components";
import { HoverContainer } from "./common/StyleFragments";
import { HEADLINE } from "../constants/colors.style";

export const HoverEdit = styled.div<{ content: string }>`
  position: relative;
  width: 30px;
  height: 30px;
  ${HoverContainer};

  &::after {
    content: ${(props) => `"${props.content}"`};
    color: ${HEADLINE};
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
  }
`;

export const HoveredContainer = styled.div`
  opacity: 0;
  background: white;
  box-shadow: -20px 0px 11px 3px white;
  position: absolute;
  display: flex;
  column-gap: 10px;
  top: 10px;
  right: 10px;
`;
