export interface ProductClientInterface {
  fetchItems: () => Promise<any>;
}

export class ProductClient implements ProductClientInterface {
  fetchItems = async () => {
    const response = await fetch("http://examplee.com/login/id+password");
    return response.json();
  };
}
