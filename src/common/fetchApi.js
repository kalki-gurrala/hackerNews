const getFetchApiUrl = (term) => {
  return `https://hn.algolia.com/api/v1/search?query=${term}`;
};

export default getFetchApiUrl;
