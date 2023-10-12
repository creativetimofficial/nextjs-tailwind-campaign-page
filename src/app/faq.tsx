"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "When does the Back-to-School Campaign start and end?",
    desc: "Our Back to School Campaign typically begins in late summer, around July or August, and continues through September. Be sure to check our website and promotional materials for specific dates each year.",
  },
  {
    title:
      "What types of discounts and offers can I expect during the campaign?",
    desc: "Our Back to School Campaign typically begins in late summer, around July or August, and continues through September. Be sure to check our website and promotional materials for specific dates each year.",
  },
  {
    title: "Do you offer any discounts for educators and teachers?",
    desc: "Our Back to School Campaign typically begins in late summer, around July or August, and continues through September. Be sure to check our website and promotional materials for specific dates each year.",
  },
  {
    title: "Can I shop online during the campaign?",
    desc: "Our Back to School Campaign typically begins in late summer, around July or August, and continues through September. Be sure to check our website and promotional materials for specific dates each year.",
  },
  {
    title: "What if I can't find a specific book or item I need for school?",
    desc: "Our Back to School Campaign typically begins in late summer, around July or August, and continues through September. Be sure to check our website and promotional materials for specific dates each year.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            The Back-to-School Campaign is a special promotion designed to make
            your return to school as smooth as possible.
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
