import axios from "axios";

export async function getArticles() {
  try {
    const response = await axios.get("http://localhost:3000/api/articles");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
