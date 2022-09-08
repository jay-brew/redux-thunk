function getProducts(keyword){
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/jay-brew/miniProject/products?q=${keyword}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
    };
}

export const productAction={getProducts};