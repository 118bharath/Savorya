import React, { useState, useEffect } from 'react';
import orderService from '../services/orderService';
import { useAuth } from '../context/AuthContext';

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            const fetchOrders = async () => {
                try {
                    const data = await orderService.getMyOrders();
                    setOrders(data);
                } catch (error) {
                    console.error("Failed to fetch orders", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchOrders();
        }
    }, [user]);

    if (isLoading) {
        return <p className="text-center my-10">Loading your orders...</p>;
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">My Orders</h1>
            <div className="space-y-4">
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div key={order._id} className="bg-white p-4 rounded-lg shadow-sm border">
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-gray-600">Order ID: #{order._id.substring(0, 8)}</p>
                                <p className={`font-semibold px-2 py-1 rounded-full text-sm ${
                                    order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {order.orderStatus}
                                </p>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p className="text-lg font-bold mt-2">Total: ₹{order.totalPrice.toFixed(2)}</p>
                        </div>
                    ))
                ) : (
                    <p>You haven't placed any orders yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyOrdersPage;