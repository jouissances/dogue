import { Ruler, Weight, Palette, Clock } from "lucide-react";

interface PhysicalTraitsProps {
  size: string;
  weight: string;
  coat: string;
  lifespan: string;
}

export default function PhysicalTraits({
  size,
  weight,
  coat,
  lifespan,
}: PhysicalTraitsProps) {
  const traits = [
    { icon: Ruler, label: "Size", value: size, testId: "text-size" },
    { icon: Weight, label: "Weight", value: weight, testId: "text-weight" },
    { icon: Palette, label: "Coat", value: coat, testId: "text-coat" },
    { icon: Clock, label: "Lifespan", value: lifespan, testId: "text-lifespan" },
  ];

  return (
    <section 
      className="max-w-4xl mx-auto px-6 mb-16"
      aria-labelledby="traits-heading"
    >
      <h2 
        id="traits-heading"
        className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-6"
      >
        Physical Characteristics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {traits.map(({ icon: Icon, label, value, testId }) => (
          <div
            key={label}
            className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow"
            data-testid={`card-trait-${label.toLowerCase()}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-primary/10">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <dt className="font-semibold mb-1">{label}</dt>
                <dd className="text-muted-foreground" data-testid={testId}>
                  {value}
                </dd>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
