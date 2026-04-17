import { use } from "react";

export default function AssetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Asset Detail: {id}</h1>
      <p className="mt-2 text-gray-400">
        TODO: Build the asset detail view here.
      </p>
    </div>
  );
}
