"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: BanknotesIcon,
    title: "We Support Educators",
    description:
      "Explore our educator resources, bulk ordering options, and special teacher discounts.",
  },
  {
    icon: LifebuoyIcon,
    title: "Support 24/7",
    description:
      "Our dedicated customer support team is available to assist you 24 hours a day, 7 days a week.",
  },
  {
    icon: TruckIcon,
    title: "Easy Shopping, Quick Delivery",
    description:
      "We offer fast and reliable shipping, so you can focus on what matters most - your education",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Get your book from us!
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12"
        >
          Start your literary adventure today by exploring these captivating
          worlds of words.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
