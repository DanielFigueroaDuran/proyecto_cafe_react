
   export  const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const newData = data.products;
        console.log(newData);
        return newData;
    }