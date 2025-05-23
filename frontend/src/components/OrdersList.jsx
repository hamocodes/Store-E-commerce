import { motion } from "framer-motion";
import { Trash, CheckCircle, Copy } from "lucide-react"; // Imported icons for trash, completed order, and copy address

const OrdersList = () => {

  const orders = [
    {
      _id: "1",
      customerName: "Ali A",
      orderTotal: 29.99,
      orderDate: "2025-05-22",
      status: "Pending",
      address: "Medina 2, Marrakesh, Morocco",
      products: [
        { name: "Jean", imageUrl: "/jean.png", href: "/jeans" }, // Corrected product structure
      ],
    },
    {
      _id: "2",
      customerName: "Salim O",
      orderTotal: 45.50,
      orderDate: "2025-04-27",
      status: "Completed",
      address: "Old Medina, Tangier, Morocco",
      products: [
        { name: "Jacket", imageUrl: "/jacket.png", href: "/shirt" },
      ],
    },
    // Add more order objects as needed
  ];

  // Handle order actions
  const deleteOrder = (orderId) => {
    console.log("Deleting order with ID:", orderId);
  };

  const markOrderAsCompleted = (orderId) => {
    console.log("Marking order with ID:", orderId);
  };

  const copyAddressToClipboard = (address) => {
    navigator.clipboard.writeText(address);
    alert("Address copied to clipboard!");
  };

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Products
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Customer & Address
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Order Total
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Order Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {orders.map((order) => (
            <tr key={order._id} className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-4">
                  {order.products.map((product, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                      <span className="text-sm text-gray-300">{product.name}</span>
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                <div className="text-sm font-medium text-white">
                  <span>{order.customerName}</span>
                  <div className="text-sm text-gray-300">{order.address}</div>
                </div>
                <button
                  onClick={() => copyAddressToClipboard(order.address)}
                  className="ml-2 text-gray-400 hover:text-gray-300"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">${order.orderTotal.toFixed(2)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{order.orderDate}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div
                  className={`text-sm ${order.status === "Completed" ? "text-green-400" : "text-yellow-400"}`}
                >
                  {order.status}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => markOrderAsCompleted(order._id)}
                  className="text-green-400 hover:text-green-300 mr-2"
                >
                  <CheckCircle className="h-5 w-5" />
                </button>
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default OrdersList;
