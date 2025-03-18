import { BusinessType } from "../constant/types";
import Card from "./Card";

export default function CommonSection({
  title,
  businesses,
}: {
  title: string;
  businesses: BusinessType[];
}) {
  return (
    <section className="mb-12" aria-labelledby="business-section">
      <h2 className="text-lg font-medium section-title">{title}</h2>
      <div className="space-y-2 ">
        {businesses.map((business: BusinessType, index) => (
          <Card
            key={index}
            url={business.url}
            text={business.text}
            title={business.title}
            subText=""
            description={business.description}
          />
        ))}
      </div>
    </section>
  );
}
