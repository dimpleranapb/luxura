import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src="" />
        <p className="">
          At Luxura, we believe in providing a luxurious shopping experience
          without compromising on sustainability. Our curated collection
          features high-quality products designed with both elegance and
          eco-friendliness in mind.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-232-445-5298</li>
            <li>contact@luxura.com</li>

        </ul>
      </div>
    </div>
    <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ Luxura.com - All right Reserved</p>
    </div>
    </div>
  );
}
