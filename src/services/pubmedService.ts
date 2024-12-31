import axios from "axios";
import { DOMParser } from '@xmldom/xmldom';

export async function getAbstract(articleId: string, apiKey?: string) {
  const apiUrl = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi";

  const params = new URLSearchParams({
    db: "pubmed",
    id: articleId,
    retmode: "xml",
  });

  if (apiKey) {
    params.append("api_key", apiKey);
  }

  try {
    const response = await axios.get(`${apiUrl}?${params.toString()}`, {
      headers: { "Content-Type": "application/xml" },
    });

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, "application/xml");

    //   tiêu đề bài đăng
    // nội dung bài đăng
    const abstract =
      xmlDoc.getElementsByTagName("AbstractText")[0]?.textContent ||
      "No abstract available";
    // danh sách tác giả
    return {
      abstract
    };
  } catch (error) {
    console.error("Error fetching PubMed article:", error);
    throw new Error("Failed to fetch PubMed article");
  }
}
