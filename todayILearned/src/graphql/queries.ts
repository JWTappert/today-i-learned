// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTil = `query GetTil($id: ID!) {
  getTIL(id: $id) {
    id
    title
    date
    content
    tags
  }
}
`;
export const listTiLs = `query ListTiLs($filter: ModelTILFilterInput, $limit: Int, $nextToken: String) {
  listTILs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      date
      content
      tags
    }
    nextToken
  }
}
`;
