export interface Model {
  id: string;
  name: string;
  age: number;
  height: string;
  category: string;
  coverImage: string;
  gallery: string[];
  description: string;
  location: string;
  services: {
    presencial: boolean;
    online: boolean;
  };
}

export interface Nightclub {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}