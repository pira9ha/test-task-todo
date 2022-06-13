import styled from "styled-components";
import {HEADLINE, LIGHT_GREEN} from "../constants/colors.style";
import {CustomRadio} from "./common/CustomCheckbox";

export const FilterItems = styled.label`
  cursor: pointer;
  
  ${CustomRadio}:checked + && {
    color: ${LIGHT_GREEN};
    font-weight: 500;
  }
`;

export const FilterContainer = styled.div`
  padding-left: 45px;
  width: 100%;
  text-transform: uppercase;
  color: ${HEADLINE};
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  
  &.filter-items_container {
    width: max-content;
    column-gap: 15px;
  }
`;
