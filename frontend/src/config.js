var baseURL;
process.env.NODE_ENV === "production"
  ? (baseURL = window.location.origin)
  : (baseURL = "http://localhost:5000");

export { baseURL };
