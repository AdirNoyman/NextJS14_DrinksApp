'use client';

const error = (error) => {
  console.log('Erorr: ', error);

  return <div className="">{error.error.message} </div>;
};

export default error;
