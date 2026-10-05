// One entry per chant, in menu order. Text lives beside this file at <slug>.txt.

export type Chant = {
  // Url path under /chanting/ and text file path under app/chants/.
  slug: string;
  title: string;
  // Short name for menus.
  label: string;
  description: string;
  // Audio path without extension. Both .mp3 and .ogg exist.
  audio: string;
  // False: page exists but menus skip it.
  listed: boolean;
};

export const chants: readonly Chant[] = [
  {
    slug: "morning",
    title: "Morning Puja",
    label: "Morning",
    description: "Karaoke for Chanting the Morning Puja from the Abhayagiri Forest Monastery",
    audio: "/assets/audio/morning-chant",
    listed: true,
  },
  {
    slug: "evening-pali",
    title: "Evening Puja (Pali)",
    label: "Evening (Pāḷi)",
    description: "Karaoke for Chanting the Evening Puja in Pali from the Abhayagiri Forest Monastery",
    audio: "/assets/audio/evening-chant-pali",
    listed: true,
  },
  {
    slug: "evening-eng",
    title: "Evening Puja (Eng.)",
    label: "Evening (Eng.)",
    description: "Karaoke for Chanting the Evening Puja in English from the Abhayagiri Forest Monastery",
    audio: "/assets/audio/evening-chant-eng",
    listed: true,
  },
  {
    slug: "requests/five-precepts",
    title: "Taking the Five Precepts",
    label: "Five Precepts",
    description: "Karaoke for Chanting the Five Precepts from the Metta Forest Monastery",
    audio: "/assets/audio/requests/5-precepts",
    listed: true,
  },
  {
    slug: "requests/eight-precepts",
    title: "Eight Precepts",
    label: "Eight Precepts",
    description: "Karaoke for Chanting the Three Refuges and Eight Precepts from the Abhayagiri Forest Monastery",
    audio: "/assets/audio/requests/three-refuges-eight-precepts",
    listed: true,
  },
  {
    slug: "requests/request-paritta",
    title: "Request Paritta Chanting",
    label: "Request Paritta",
    description: "Karaoke for Chanting the Paritta Request from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/requests/request-paritta-chanting",
    listed: true,
  },
  {
    slug: "reflections/body-contemplation",
    title: "Body Contemplation",
    label: "Body Contemplation",
    description: "Karaoke for Chanting the 32 Parts of the Body from the Metta Forest Monastery",
    audio: "/assets/audio/reflections/body-contemplation",
    listed: true,
  },
  {
    slug: "reflections/five-recollections",
    title: "Five Recollections",
    label: "Five Recollections",
    description: "Karaoke for Chanting the Five Recollections from the Metta Forest Monastery",
    audio: "/assets/audio/reflections/five-recollections",
    listed: true,
  },
  {
    slug: "reflections/sublime-attitudes",
    title: "Sublime Attitudes",
    label: "Sublime Attitudes",
    description: "Karaoke for Chanting the Sublime Attitudes from the Metta Forest Monastery",
    audio: "/assets/audio/reflections/sublime-attitudes",
    listed: true,
  },
  {
    slug: "reflections/verses-of-sharing-and-aspiration-pali",
    title: "Sharing and Aspiration (Pali)",
    label: "Verses of Sharing (Pāḷi)",
    description: "Karaoke for Chanting the Verses of Sharing and Aspiration in Pali from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/reflections/sharing-blessings-pali",
    listed: true,
  },
  {
    slug: "reflections/verses-of-sharing-and-aspiration-eng",
    title: "Sharing and Aspiration (Eng)",
    label: "Verses of Sharing (Eng.)",
    description: "Karaoke for Chanting the Verses of Sharing and Aspiration in English from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/reflections/sharing-blessings-eng",
    listed: true,
  },
  {
    slug: "reflections/suffusion-divine-abidings-pali",
    title: "Divine Abidings (Pali)",
    label: "Suffusion - Divine Abidings (Pāḷi)",
    description: "Karaoke for Chanting the Suffusion with the Divine Abidings in Pali from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/reflections/suffusion-divine-abidings-pali",
    listed: true,
  },
  {
    slug: "reflections/suffusion-divine-abidings-eng",
    title: "Divine Abidings (Eng.)",
    label: "Suffusion - Divine Abidings (Eng.)",
    description: "Karaoke for Chanting the Suffusion with the Divine Abidings in English from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/reflections/suffusion-divine-abidings-eng",
    listed: true,
  },
  {
    slug: "reflections/the-highest-blessings-eng",
    title: "The Highest Blessings",
    label: "The Highest Blessings (Eng.)",
    description: "Karaoke for Chanting The Highest Blessings in English from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/reflections/the-highest-blessings-eng",
    listed: true,
  },
  {
    slug: "reflections/four-requisites",
    title: "Four Requisites",
    label: "The Four Requisites",
    description: "Karaoke for Chanting the Reflection on the Four Requisites in Pali & English from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/reflections/four-requistes-pali-and-eng",
    listed: true,
  },
  {
    slug: "blessings/metta-sutta-pali",
    title: "Metta Sutta (Pali)",
    label: "Metta Sutta (Pāḷi)",
    description: "Karaoke for Chanting the Karaniya Metta Sutta in Pali from the Metta Forest Monastery",
    audio: "/assets/audio/blessings/karaniya-metta-sutta-pali",
    listed: true,
  },
  {
    slug: "blessings/metta-sutta-eng",
    title: "Metta Sutta (Eng.)",
    label: "Metta Sutta (Eng.)",
    description: "Karaoke for Chanting the Karaniya Mettā Sutta in English from the Abhayagiri Forest Monastery",
    audio: "/assets/audio/blessings/karaniya-metta-sutta-eng",
    listed: true,
  },
  {
    slug: "parittas/invitation-to-devas",
    title: "Invitation to Devas",
    label: "Invitation to the Devas",
    description: "Karaoke for Chanting the Invitation to the Devas in Pali from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/parittas/invitation-to-devas",
    listed: true,
  },
  {
    slug: "parittas/namo-tassa",
    title: "Namo Tassa",
    label: "Namo Tassa",
    description: "Karaoke for Chanting Namo Tassa in Pali from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/parittas/namo-tassa",
    listed: true,
  },
  {
    slug: "parittas/three-refuges",
    title: "The Three Refuges",
    label: "Three Refuges",
    description: "Karaoke for Chanting The Three Refuges in Pali from the Amarvati Buddhist Monastery.",
    audio: "/assets/audio/parittas/three-refuges",
    listed: true,
  },
  {
    slug: "suttas/dhammacakkappavattana",
    title: "Dhammacakkappavattana Sutta",
    label: "Dhammacakkappavattana",
    description: "Karaoke for Chanting the Dhammacakkappavattana Sutta from the Amarvati Buddhist Monastery",
    audio: "/assets/audio/suttas/dhammacakkappavattana",
    listed: true,
  },
  {
    slug: "extras/chant-of-metta",
    title: "Chant of Metta",
    label: "The Chant of Metta",
    description: "Karaoke for Chanting The Chant of Metta by Imee Ooi",
    audio: "/assets/audio/extras/the-chant-of-metta",
    listed: true,
  },
  {
    slug: "blessings/mangala-sutta",
    title: "Mangala Sutta",
    label: "Mangala Sutta",
    description: "Karaoke for Chanting the Maṅgala Sutta from the Metta Forest Monastery",
    audio: "/assets/audio/reflections/body-contemplation",
    listed: false,
  },
];

export function findChant(slug: string): Chant | undefined {
  return chants.find((chant) => chant.slug === slug);
}
