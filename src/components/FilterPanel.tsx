import { FilterContainer, FilterItems } from "./styled/FilterItems";
import { CustomRadio } from "./styled/common/CustomCheckbox";
import { Status } from "../models/Status";
import { actions } from "../stateWorker/appStateSlice";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { PropsWithFilter } from "../models/Props";

export const FilterPanel: FC<PropsWithFilter> = ({ list, filter }) => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      {list.filteredTasks.length === 0
        ? "Заданий нет"
        : list.filteredTasks.length}
      <FilterContainer className="filter-items_container">
        <CustomRadio
          name={`filter_${list.id}`}
          id={`All_${list.id}`}
          checked={filter.value === Status.All}
          onChange={() =>
            dispatch(
              actions.updateFilter({
                list,
                filter: Status.All,
              }),
            )
          }
        />
        <FilterItems htmlFor={`All_${list.id}`}>Все</FilterItems>
        <CustomRadio
          name={`filter_${list.id}`}
          id={`Done_${list.id}`}
          checked={filter.value === Status.Done}
          onChange={() =>
            dispatch(
              actions.updateFilter({
                list,
                filter: Status.Done,
              }),
            )
          }
        />
        <FilterItems htmlFor={`Done_${list.id}`}>Done</FilterItems>
        <CustomRadio
          name={`filter_${list.id}`}
          id={`Undone_${list.id}`}
          checked={filter.value === Status.Undone}
          onChange={() =>
            dispatch(
              actions.updateFilter({
                list,
                filter: Status.Undone,
              }),
            )
          }
        />
        <FilterItems htmlFor={`Undone_${list.id}`}>Undone</FilterItems>
      </FilterContainer>
    </FilterContainer>
  );
};
