import Badge from "./Badge";

type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <Badge>

        {badge}

      </Badge>

      <h2 className="mt-6 text-5xl font-black text-slate-900 leading-tight">

        {title}

      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">

        {description}

      </p>

    </div>
  );
}