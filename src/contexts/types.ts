export interface iChildren {
  children: React.ReactNode;
}

export interface iProductsItem {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iCreateUserProps {
  name: string;
  email: string;
  password: string;
  confirmation: string;
}

export interface iLoginUserProps {
  email: string;
  password: string;
}
