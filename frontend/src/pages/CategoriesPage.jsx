import React from "react";
import CategoryItem from "../components/CategoryItem";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jean.png" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirt.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoe.png" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasse.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jacket.png" },
  { href: "/suits", name: "Suits", imageUrl: "/suit.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bag.png" },
  { href: "/watches", name: "Watches", imageUrl: "/watch.png" },
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Categories</h1>
        <p className="text-lg text-gray-300 mb-12">
          Find the best fashion products by category
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
