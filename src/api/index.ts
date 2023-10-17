/**
 * Concept of an API adapter, potentially generated using https://www.npmjs.com/package/openapi-typescript or similar
 * The adapter returns mock data for now, and does not perform any network calls yet.
 */
const api = {
  getUser: async () => ({ name: "Bob", age: 22 }),
};

// TODO: add mutations and other operations, validate that the routes re-validate the data

export default api;
