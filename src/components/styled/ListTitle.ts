import styled from "styled-components";
import {CustomCheckbox} from "./common/CustomCheckbox";
import {HoverContainer, Label} from "./common/StyleFragments";
import {BACKGROUND_COLOR, FONT_DARK, UNDERLINE_PRIMARY} from "../constants/colors.style";
import {HoveredContainer, HoverEdit} from "./HoverButtons";

export const ListTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${FONT_DARK};
  
  &:hover > ${HoveredContainer} {
    opacity: 1;
    cursor: pointer;
    background-color: ${BACKGROUND_COLOR};
    box-shadow: -20px 0 11px 3px ${BACKGROUND_COLOR};
  }
  &:hover ${HoveredContainer} ${HoverEdit} {
    background-color: white;
  }
`;

export const ListName = styled.span`
  font-weight: 600;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid ${UNDERLINE_PRIMARY};
`;

export const ListDisclosure = styled.label`
  ${Label};
  transform: rotate(90deg);

  &:hover {
    ${HoverContainer};
  }

  &::after {
    content: '\\276F';
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
  }

  ${CustomCheckbox}:checked + && {
    transform: rotate(270deg);
  }
`;
