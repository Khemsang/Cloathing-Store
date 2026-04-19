"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-serif mb-12">
          Here to{" "}
          <span className="underline decoration-red-400">help</span>
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT - Contact Form */}
          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full name*"
              className="w-full bg-[#e8dfd2] px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email address*"
              className="w-full bg-[#e8dfd2] px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Contact number"
              className="w-full bg-[#e8dfd2] px-4 py-3 outline-none"
            />

            <textarea
              placeholder="Message*"
              rows="6"
              className="w-full bg-[#e8dfd2] px-4 py-3 outline-none resize-none"
            />

            <button className="bg-red-500 text-white px-6 py-2 rounded-full">
              Send message →
            </button>
          </div>

          {/* RIGHT - Newsletter */}
          <div className="space-y-6">

            <h2 className="text-2xl font-serif">
              Join our newsletter
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Add your details and you'll receive our quarterly email,
              including what's happening with the wildlife, nature and
              communities around Lewa House.
            </p>

            <input
              type="email"
              placeholder="Enter your email address."
              className="w-full bg-[#e8dfd2] px-4 py-3 outline-none"
            />

            <button className="bg-red-500 text-white px-6 py-2 rounded-full">
              Sign up →
            </button>

            {/* Footer Info */}
            <div className="text-sm text-gray-700 space-y-3 pt-6">

              <div>
                <p className="font-medium">For bookings, rates & reservations:</p>
                <p className="underline cursor-pointer">
                  Bush and Beyond
                </p>
              </div>

              <div className="flex gap-4 flex-wrap text-xs underline">
                <span>Legal</span>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>
              </div>

              <div className="text-xs space-y-1">
                <p className="font-medium">Alternatively contact us at:</p>
                <p>info@lewahouse.com</p>
                <p>+254 (0)770 791303</p>
                <p>
                  Lewa House (Pvt) Ltd. <br />
                  P.O. Box 760 <br />
                  60300 <br />
                  Kenya
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}