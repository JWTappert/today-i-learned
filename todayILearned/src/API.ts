/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTILInput = {
  id?: string | null,
  title: string,
  date: string,
  content?: string | null,
  tags?: Array< string | null > | null,
};

export type UpdateTILInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  content?: string | null,
  tags?: Array< string | null > | null,
};

export type DeleteTILInput = {
  id?: string | null,
};

export type ModelTILFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  date?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  tags?: ModelStringFilterInput | null,
  and?: Array< ModelTILFilterInput | null > | null,
  or?: Array< ModelTILFilterInput | null > | null,
  not?: ModelTILFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateTilMutationVariables = {
  input: CreateTILInput,
};

export type CreateTilMutation = {
  createTIL:  {
    __typename: "TIL",
    id: string,
    title: string,
    date: string,
    content: string | null,
    tags: Array< string | null > | null,
  } | null,
};

export type UpdateTilMutationVariables = {
  input: UpdateTILInput,
};

export type UpdateTilMutation = {
  updateTIL:  {
    __typename: "TIL",
    id: string,
    title: string,
    date: string,
    content: string | null,
    tags: Array< string | null > | null,
  } | null,
};

export type DeleteTilMutationVariables = {
  input: DeleteTILInput,
};

export type DeleteTilMutation = {
  deleteTIL:  {
    __typename: "TIL",
    id: string,
    title: string,
    date: string,
    content: string | null,
    tags: Array< string | null > | null,
  } | null,
};

export type GetTilQueryVariables = {
  id: string,
};

export type GetTilQuery = {
  getTIL:  {
    __typename: "TIL",
    id: string,
    title: string,
    date: string,
    content: string | null,
    tags: Array< string | null > | null,
  } | null,
};

export type ListTiLsQueryVariables = {
  filter?: ModelTILFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTiLsQuery = {
  listTILs:  {
    __typename: "ModelTILConnection",
    items:  Array< {
      __typename: "TIL",
      id: string,
      title: string,
      date: string,
      content: string | null,
      tags: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTilSubscription = {
  onCreateTIL:  {
    __typename: "TIL",
    id: string,
    title: string,
    date: string,
    content: string | null,
    tags: Array< string | null > | null,
  } | null,
};

export type OnUpdateTilSubscription = {
  onUpdateTIL:  {
    __typename: "TIL",
    id: string,
    title: string,
    date: string,
    content: string | null,
    tags: Array< string | null > | null,
  } | null,
};

export type OnDeleteTilSubscription = {
  onDeleteTIL:  {
    __typename: "TIL",
    id: string,
    title: string,
    date: string,
    content: string | null,
    tags: Array< string | null > | null,
  } | null,
};
