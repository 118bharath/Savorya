import React from 'react';
import { useParams } from 'react-router-dom';

const ManageMenuPage = () => {
  const { restaurantId } = useParams(); // Gets the id from the url

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Menu</h1>
      <p>You are managing the menu for restaurant ID: {restaurantId}</p>
    </div>
  );
};

export default ManageMenuPage;