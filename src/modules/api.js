const weather = (() => {
  
    async function getData(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=e069f2b106c04ce29a1142633233108&q=${location}`;

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
  }

  return {
    getData,
  };
})();

export default weather;
