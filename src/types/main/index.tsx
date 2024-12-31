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

export interface findArticleByIdProps {
  id: string;
}

export interface paramsArticleProps {
  id: string;
}

export interface articleProps {
  title: string;
  abstract: string;
  author: string;
  date: string;
  url: string;
}

export interface articleId {
  params: string;
}