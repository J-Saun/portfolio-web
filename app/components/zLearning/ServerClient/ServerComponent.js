const getData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

const ServerComponent = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <h1>Server Component</h1>
    </div>
  );
};

export default ServerComponent;
