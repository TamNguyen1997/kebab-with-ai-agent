interface MenuItem {
  name: string;
  price: string;
  description: string;
  emoji: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Chicken Kebab",
    price: "$5.99",
    description: "Tender marinated chicken grilled to perfection",
    emoji: "🐔"
  },
  {
    name: "Beef Kebab",
    price: "$6.49",
    description: "Succulent beef seasoned with traditional spices",
    emoji: "🥩"
  },
  {
    name: "Lamb Kebab",
    price: "$6.99",
    description: "Premium lamb with aromatic herbs and spices",
    emoji: "🐑"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">🥙 Kebab Palace</h1>
          <p className="text-xl opacity-90">Authentic Turkish Cuisine</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Welcome to Kebab Palace
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the authentic taste of Turkey with our freshly grilled kebabs. 
            Made with the finest ingredients and traditional recipes passed down through generations.
          </p>
          <div className="inline-block bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
            ⭐ Fresh • Delicious • Affordable ⭐
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Signature Kebabs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-orange-100"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="text-3xl font-bold text-red-600 mb-4">{item.price}</div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Kebab Palace?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-2">Fresh Grilled</h3>
              <p className="opacity-90">All our kebabs are grilled fresh to order for the perfect taste and texture.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-2">Premium Ingredients</h3>
              <p className="opacity-90">We use only the finest quality meats and authentic Turkish spices.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="opacity-90">Quick preparation without compromising on quality or taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Visit Us Today</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Come and experience the authentic taste of Turkish cuisine at Kebab Palace. 
              We&apos;re open daily and ready to serve you the best kebabs in town!
            </p>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📍 Location & Hours</h3>
              <p className="text-gray-600 mb-2">123 Main Street, Food District</p>
              <p className="text-gray-600 mb-2">📞 (555) 123-KEBAB</p>
              <p className="text-gray-600">🕒 Open Daily: 11:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🥙 Kebab Palace</h3>
          <p className="text-gray-400 mb-4">Bringing you the authentic taste of Turkey since 2020</p>
          <div className="flex justify-center space-x-6">
            <span className="text-gray-400">Follow us:</span>
            <span className="cursor-pointer hover:text-orange-400 transition-colors">📘 Facebook</span>
            <span className="cursor-pointer hover:text-orange-400 transition-colors">📷 Instagram</span>
            <span className="cursor-pointer hover:text-orange-400 transition-colors">🐦 Twitter</span>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-500">
            © 2025 Kebab Palace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
