import axios from "axios";
import { DOMParser } from '@xmldom/xmldom';

export async function getArticleInfo(articleId: string, apiKey?: string) {
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
    const title =
      xmlDoc.getElementsByTagName("ArticleTitle")[0]?.textContent ||
      "No title available";
    // nội dung bài đăng
    const abstract =
      xmlDoc.getElementsByTagName("AbstractText")[0]?.textContent ||
      "No abstract available";
    // danh sách tác giả
    const authors = Array.from(xmlDoc.getElementsByTagName("Author"))
      .map((author) => {
        const lastName =
          author.getElementsByTagName("LastName")[0]?.textContent;
        const foreName =
          author.getElementsByTagName("ForeName")[0]?.textContent;
        return lastName && foreName ? `${lastName}, ${foreName}` : null;
      })
      .filter(Boolean) as string[];
    return {
      title,
      abstract,
      authors,
    };
  } catch (error) {
    console.error("Error fetching PubMed article:", error);
    throw new Error("Failed to fetch PubMed article");
  }
}
