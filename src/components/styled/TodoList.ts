import styled from "styled-components";
import {ButtonNormalize, Label} from "./common/StyleFragments";
import {Status} from "../../models/Status";
import {FONT_PRIMARY, LIGHT_BORDER, LIGHT_GREEN} from "../constants/colors.style";
import {HoveredContainer} from "./HoverButtons";

export const TodoList = styled.div`
  max-width: 900px;
  height: fit-content;
  margin: 30px 15px 0;
`;

export const TodoListContent = styled.ul<{ isOpen: boolean}>`
  max-height: ${(props) => props.isOpen ? 'max-content' : '0'};
  overflow: hidden;
  list-style: none;
  margin-bottom: 10px;
`;

export const TodoItem = styled.li<{ status: Status }>`
  position: relative;
  display: flex;
  text-decoration-line: ${(props) => props.status === 0 ? 'line-through' : 'none'};
  color: ${FONT_PRIMARY};
  min-height: 30px;
  width: 100%;
  text-align: left;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid ${LIGHT_BORDER};

  &:hover > ${HoveredContainer} {
    opacity: 1;
    cursor: pointer;
  }
`;

export const TodoChecker = styled.label<{ status: Status }>`
  ${Label};
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    cursor: pointer;
    right: calc(50% - 10px);
    bottom: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border: 1px solid #574E4D;
    border-radius: 50%;
    transition: all 0.3s ease-in;
  }

  &&::before {
    opacity: ${(props) => props.status === 0 ? '1' : '0'};
    content: '';
    position: absolute;
    cursor: pointer;
    right: 9px;
    top: 7px;
    width: 12px;
    height: 8px;
    transform: rotate(315deg);
    border-left: 2px solid ${LIGHT_GREEN};
    border-bottom: 2px solid ${LIGHT_GREEN};
  }
`;

export const NewItem = styled.button`
  ${ButtonNormalize};
  width: 100%;
  padding: 12px;
  color: ${FONT_PRIMARY};
  height: 100%;
  border-bottom: 1px solid ${LIGHT_BORDER};
  
  &::before {
    content: '\\002B';
    margin-right: 15px;
    line-height: 20px;
    width: 24px;
    height: 24px;
    font-size: 24px;
    color: ${LIGHT_GREEN};
  }
  
  &:hover {
    color: ${LIGHT_GREEN};
  }
  
  &:hover::before {
    color: #fff;
    border-radius: 50%;
    background-color: ${LIGHT_GREEN};
  }
`;

export const NewTodo = styled(NewItem)`
  margin: 50px auto;
  width: fit-content;
  border: 0;
`;

