import { FilterContainer, FilterItems } from "./styled/FilterItems";
import { CustomRadio } from "./styled/common/CustomCheckbox";
import { Status } from "../models/Status";
import { actions } from "../stateWorker/appStateSlice";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { PropsWithFilter } from "../models/Props";

export const FilterPanel: FC<PropsWithFilter> = ({ list, filter }) => {
  const dispatch = useDispatch();

  const onChangeStatus = (status: Status) => {
    dispatch(
      actions.updateFilter({
        list,
        filter: status,
      }),
    );
  };

  return (
    <FilterContainer data-testid="filter-text-content">
      {list.filteredTasks.length === 0
        ? "Заданий нет"
        : list.filteredTasks.length}
      <FilterContainer className="filter-items_container">
        <CustomRadio
          data-testid="filter-radio"
          name={`filter_${list.id}`}
          id={`All_${list.id}`}
          checked={filter.value === Status.All}
          onChange={() => onChangeStatus(Status.All)}
        />
        <FilterItems htmlFor={`All_${list.id}`}>Все</FilterItems>
        <CustomRadio
          data-testid="filter-radio"
          name={`filter_${list.id}`}
          id={`Done_${list.id}`}
          checked={filter.value === Status.Done}
          onChange={() => onChangeStatus(Status.Done)}
        />
        <FilterItems htmlFor={`Done_${list.id}`}>Сделано</FilterItems>
        <CustomRadio
          data-testid="filter-radio"
          name={`filter_${list.id}`}
          id={`Undone_${list.id}`}
          checked={filter.value === Status.Undone}
          onChange={() => onChangeStatus(Status.Undone)}
        />
        <FilterItems htmlFor={`Undone_${list.id}`}>Не сделано</FilterItems>
      </FilterContainer>
    </FilterContainer>
  );
};
