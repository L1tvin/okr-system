import axios from "axios";

const OKR_API_BASE_URL = "http://localhost:8080/api/v1/okrs";

class OKRService {

    getOKRs() {
        return axios.get(OKR_API_BASE_URL);
    }

    createOKR(okr) {
        return axios.post(OKR_API_BASE_URL, okr);
    }

    getOKRbyId(okrId) {
        return axios.get(OKR_API_BASE_URL + '/' + okrId);
    }

    updateOKR(okr, okrId) {
        return axios.put(OKR_API_BASE_URL + '/' + okrId, okr);
    }

    deleteOKRbyId(okrId) {
        return axios.delete(OKR_API_BASE_URL + '/' + okrId);
    }

}

export default new OKRService()