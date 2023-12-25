import React from 'react';
import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  // throw new Error('Something went wrong');
  if (!response.ok) throw new Error('Failed fetching the drink 😩');
  const data = await response.json();
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  const drink = await getSingleDrink(params.id);
  const title = drink?.drinks[0]?.strDrink;
  const imgSrc = drink?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
