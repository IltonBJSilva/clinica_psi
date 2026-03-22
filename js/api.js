const API_BASE_URL = "http://localhost:8080";

export default API_BASE_URL;

export function getHeaders() {
    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json"
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
}