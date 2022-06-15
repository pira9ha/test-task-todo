import styled from "styled-components";
import {FONT_DARK, LIGHT_BORDER, LIGHT_GREEN, UNDERLINE_PRIMARY} from "../../constants/colors.style";
import {ButtonNormalize} from "../common/StyleFragments";

export const Input = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  max-width: 100%;
  min-width: 100%;
  padding: 10px;
  min-height: 50px;
  height: 100%;
  background-color: white;
  border: 1px solid ${UNDERLINE_PRIMARY};
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in;
  
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${UNDERLINE_PRIMARY};
  }
`;

export const SubmitButton = styled.button.attrs({ type: "submit" })`
  ${ButtonNormalize};

  font-size: 16px;
  padding: 10px 20px;
  background-color: ${LIGHT_GREEN};
  color: white;
  border-radius: 20px;
  width: fit-content;
  
  &:disabled {
    background-color: ${LIGHT_BORDER};
    color: white;
    pointer-events: none;
  }
`;

export const ResetButton = styled.div.attrs({ role: "button" })`
  ${ButtonNormalize};
  
  font-size: 16px;
  padding: 10px;
  color: ${FONT_DARK};
  margin-left: 25px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const FormContainer = styled.form<{ createList?: boolean, editTitle?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  padding: ${(props) => props.createList ? '0 15 0 45px' : '10px 0'};
  margin: ${(props) => props.createList ? '50px auto' : 'auto'};
  border-bottom: ${(props) => props.editTitle  ? `1px solid ${UNDERLINE_PRIMARY}` : '0'};
`;
