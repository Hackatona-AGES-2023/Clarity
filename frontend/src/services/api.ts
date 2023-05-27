import axios from 'axios'

async function getIAResponse(isGPT: boolean, message: String) {
  return axios({
    url: "http://localhost:8080/exec",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      message,
      isGPT,
    }),
  });
}

export { getIAResponse }