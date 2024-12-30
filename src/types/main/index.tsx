import type { ReactNode } from "react";

export interface mainProps {
  children: ReactNode;
}

export interface Article {
  articleId: string;
  author: string;
  createdAt: string;
  createdUpload: string;
  id: string;
  title: string;
  url: string;
}
