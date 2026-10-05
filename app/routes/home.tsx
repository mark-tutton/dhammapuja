import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dhammapuja" },
    {
      name: "description",
      content: "A Karaoke for Chanting Dhamma in English and Pāli",
    },
  ];
}

export default function Home() {
  return <h1>Dhammapuja</h1>;
}
