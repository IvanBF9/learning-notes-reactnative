export interface INote {
  _id: string;
  title: string;
  author: string;
  anonym: boolean;
  tags: string[];
  text: string;
  image?: string;
  creation_date: string;
}
export interface CreateNote {
  title: string;
  author?: string;
  anonym: boolean;
  tags?: string[];
  text: string;
  image?: string;
}

export interface EditNote {
  title: string;
  tags?: string[];
  text: string;
  image?: string;
}

export interface DeleteNote {
  _id: string;
}
