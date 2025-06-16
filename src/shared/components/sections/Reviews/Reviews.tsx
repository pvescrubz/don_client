"use client";

import { REVIEWS_CONFIG } from "@/shared/content/reviews.config";
import ReviewSlider from "../../parts/ReviewsSlider/ReviewsSlider";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";

export const Reviews = () => {
  return (
    <Section>
      <Title>Отзывы</Title>
      <ReviewSlider items={REVIEWS_CONFIG} />
    </Section>
  );
};
