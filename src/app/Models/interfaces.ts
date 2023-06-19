export interface IProducto{
  title: string;
  description: string;
  file: {
    fileName: string;
    url: string;
    image: {
      width: number;
      height: number;
    }
  }
}

