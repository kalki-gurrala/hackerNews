const getFetchApiUrlForDetail = (obj) => {
  console.log("SearchTerm in api call", obj);

  return `https://hn.algolia.com/api/v1/items/${obj}`;
};

export default getFetchApiUrlForDetail;
