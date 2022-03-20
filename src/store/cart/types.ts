import { IProduct } from "../../components/Product";

export interface IReducerStateProps {
  product: IProduct;
  quantity: number;
};

export interface IActionProps {
  type: string;
  payload: IProduct;
}

export interface ICart {
  items: IReducerStateProps[];
  failedStockCheck: number[];
}
