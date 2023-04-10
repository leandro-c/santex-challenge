export interface Product {
  [x: string]: any;
  id: string;
  name: string;
  slug: string;
  description: string;
  variants: [
    {
      __typename: string;
      price: number;
      product: {
        __typename: string;
        name: string;
        description: string;
      };
    }
  ];
  assets: [
    {
      __typename: string;
      name: string;
      type: string;
      source: string;
      preview: string;
    }
  ];
}
export type ProductParam = {
  products: any;
  id: string;
  name: string;
  slug: string;
  description: string;
  variants: [
    {
      __typename: string;
      price: number;
      product: {
        __typename: string;
        name: string;
        description: string;
      };
    }
  ];
  assets: [
    {
      __typename: string;
      name: string;
      type: string;
      source: string;
      preview: string;
    }
  ];
};
