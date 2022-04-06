export class ProductClient {
  fetchItems = async () => {
    const response = await fetch("http://examplee.com/login/id+password");
    return response.json();
  };
}
