
"use client";

import Image from "next/image";

export default function EcommerceProfile() {
  return (
    <div className="min-h-screen bg-black-100">
      {/* Cover */}
      <div className="h-48 w-full relative">
        <Image
          src="https://images.unsplash.com/photo-1555529771-35a7c0b7b52b"
          alt="cover"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-1/4">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white -mt-16">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="profile"
                  width={96}
                  height={96}
                />
              </div>

              <h2 className="mt-4 text-lg font-semibold">John Customer</h2>

              <button className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-lg">
                Edit Profile
              </button>

              <div className="mt-6 text-left text-sm text-gray-600 space-y-3">
                <h3 className="font-semibold text-gray-800">ACCOUNT</h3>
                <p>My Orders</p>
                <p>Wishlist</p>
                <p>Addresses</p>
                <p>Payment Methods</p>

                <h3 className="font-semibold text-gray-800 mt-4">SUPPORT</h3>
                <p>Help Center</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">Recent Orders</h2>
                <button className="text-blue-500 text-sm">View all</button>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between border p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    <div>
                      <p className="text-sm font-medium">Wireless Headphones</p>
                      <p className="text-xs text-gray-500">Order #12345</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">$120</p>
                </div>

                <div className="flex items-center justify-between border p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    <div>
                      <p className="text-sm font-medium">Smart Watch</p>
                      <p className="text-xs text-gray-500">Order #12346</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">$80</p>
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="font-semibold text-gray-800">Wishlist</h2>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <div className="h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Sneakers</p>
                </div>

                <div className="border rounded-lg p-3 text-center">
                  <div className="h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Backpack</p>
                </div>

                <div className="border rounded-lg p-3 text-center">
                  <div className="h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Sunglasses</p>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="font-semibold text-gray-800">Recommended for you</h2>

              <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <div className="h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Laptop</p>
                </div>

                <div className="border rounded-lg p-3 text-center">
                  <div className="h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Headphones</p>
                </div>

                <div className="border rounded-lg p-3 text-center">
                  <div className="h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Camera</p>
                </div>

                <div className="border rounded-lg p-3 text-center">
                  <div className="h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Shoes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}