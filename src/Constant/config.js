
let BASE_URL_PATH;

if (process.env.REACT_APP_NODE_ENV === 'production') {
  BASE_URL_PATH = "http://localhost:5000/"
} 
else if (process.env.REACT_APP_NODE_ENV === 'staging') {
  BASE_URL_PATH = "http://localhost:5000/"
} 
else if (process.env.REACT_APP_NODE_ENV === 'qa') {
  BASE_URL_PATH = "http://localhost:5000/"
} 
else {
  BASE_URL_PATH = 'http://localhost:5000/'
}


const config = {
  BASE_URL: BASE_URL_PATH,
};

export default config;
