import { URL, HTTP_STATUSES } from './constants'

export const api = {
  async getCharacters() {
    try {
      const res = await fetch(`${URL}`);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en la Peticion de getCharacters");
    }
  },

  async nextPage(URL) {
    try {
      const res = await fetch(`${URL}`);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en la Peticion de getCharacters");
    }
  },

  async backPage(URL) {
    try {
      const res = await fetch(`${URL}`);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en la Peticion de getCharacters");
    }
  },
};