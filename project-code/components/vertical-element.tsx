"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type VerticalElementType = {
  title: string;
  location: string;
  description: string;
  date: string;
  icon: React.FunctionComponentElement<any>;
};

const VerticalElement = ({
  title,
  location,
  description,
  date,
  icon,
}: VerticalElementType) => {
  const theme = "light";
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === "light" ? "#e2e8f0" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
      }}
      date={date}
      icon={icon}
      iconStyle={{
        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem",
      }}
      visible={inView}
    >
      <h3 className="font-semibold capitalize" ref={ref}>
        {title + location}
      </h3>
      <p className="!mt-2 !font-normal text-gray-700">
        {description}
      </p>
    </VerticalTimelineElement>
  );
};

export { VerticalElement };