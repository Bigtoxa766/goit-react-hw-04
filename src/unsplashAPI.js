import axios from "axios";


export const fetchApi = async item => {
  
  const CLIENT_ID = "W2pH_SyCpkyrmNxIOiGpmG0aEq1NmybzWVdMFQN9fIQ";
  const BASE_URL =`https://api.unsplash.com`;
  const response = await axios(`${BASE_URL}/search/photos?client_id=${CLIENT_ID}&page=1&query=${item}`);
  return response.data;
}
