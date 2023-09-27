import http from "../http-common";

class StarRatingDataService {
  getAll() {
    return http.get("/starRating");
  }

  get(starRating) {
    return http.get(`/starRating/${starRating}`);
  }

  create(data) {
    return http.post("/starRating", data);
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

export default new StarRatingDataService();