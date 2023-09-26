import http from "../http-common";

class BusinessDataService {
  getAll() {
    return http.get("/business");
  }

  get(id) {
    return http.get(`/business/${id}`);
  }

  create(data) {
    return http.post("/business", data);
  }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
}

export default new BusinessDataService();