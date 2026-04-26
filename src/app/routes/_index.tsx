import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "House Buy Guide" },
    { name: "description", content: "Plan your home purchase with confidence." },
  ];
}

export default function Index() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Welcome to the House Buying Guide</h1>
      <p className="text-lg text-gray-700">
        Your comprehensive resource for navigating the home buying process with confidence.
      </p>
    </main>
  );
}