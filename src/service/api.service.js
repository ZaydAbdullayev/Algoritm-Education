import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

const config = {
  headers: {
    "Content-Type": "application/json; multipart/form-data",
  },
};

export const ApiAddService = {
  async fetching(url, data) {
    const response = await axios.post(`${base_url}/${url}`, data, config);
    return response;
  },
};

export const ApiGetService = {
  async fetching(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${base_url}/${url}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
