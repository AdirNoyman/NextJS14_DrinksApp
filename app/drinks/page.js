const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  // throw new Error('Something went wrong');
  if (!response.ok) throw new Error('Failed fetching the drinks 😩');
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">Drinks Page 🤓</h1>
    </div>
  );
};

export default DrinksPage;
