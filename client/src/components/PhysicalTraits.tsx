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
    <div className="space-y-4">
      {traits.map(({ icon: Icon, label, value, testId }) => (
        <div
          key={label}
          className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
          data-testid={`card-trait-${label.toLowerCase()}`}
        >
          <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <dt className="font-semibold mb-1">{label}</dt>
            <dd className="text-muted-foreground text-sm" data-testid={testId}>
              {value}
            </dd>
          </div>
        </div>
      ))}
    </div>
  );
}
