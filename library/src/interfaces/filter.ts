type Type = "text" | "list" | "date" | "tag";

type ConditionListId = "is" | "is_not";

type ConditionTextId = "contains" | "contains_no";

type ConditionDateId = "after" | "before";

type ConditionId = ConditionListId & ConditionTextId & ConditionDateId;

export interface Condition {
  id: ConditionId; // TODO: load the right condition id by type in Filter when ActiveFilter is used
  label: string;
  icon?: string;
}

export interface Conditions extends Array<Condition> {}

export interface Option extends Condition {}

export interface Options extends Array<Option> {}

export interface Filter {
  id: string;
  label: string;
  type: Type;
  icon?: string;
  options?: Options;
}

export interface Filters extends Array<Filter> {}

export interface ActiveFilter extends Filter {
  value: null;
  condition: Condition;
}

export interface ActiveFilters extends Array<ActiveFilter> {}
