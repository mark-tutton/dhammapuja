// Layout of the chant index page. Order and headings differ from the menu,
// so kept apart from catalog order. A divider is drawn above each row but the first.

export type IndexGroup = { heading: string; slugs: readonly string[] };
export type IndexRow = {
  // True: groups sit side by side on wider screens.
  columns?: boolean;
  // True: no divider above this row.
  joined?: boolean;
  groups: readonly IndexGroup[];
};

export const indexRows: readonly IndexRow[] = [
  {
    columns: true,
    groups: [
      { heading: "Morning", slugs: ["morning"] },
      { heading: "Evening", slugs: ["evening-pali", "evening-eng"] },
    ],
  },
  {
    groups: [
      {
        heading: "Reflections",
        slugs: [
          "reflections/body-contemplation",
          "reflections/five-recollections",
          "reflections/sublime-attitudes",
          "reflections/verses-of-sharing-and-aspiration-pali",
          "reflections/verses-of-sharing-and-aspiration-eng",
          "reflections/suffusion-divine-abidings-pali",
          "reflections/suffusion-divine-abidings-eng",
          "reflections/the-highest-blessings-eng",
          "reflections/four-requisites",
        ],
      },
    ],
  },
  {
    groups: [
      {
        heading: "Blessings",
        slugs: ["blessings/metta-sutta-eng", "blessings/metta-sutta-pali"],
      },
    ],
  },
  {
    groups: [
      {
        heading: "Formal Requests",
        slugs: [
          "requests/five-precepts",
          "requests/eight-precepts",
          "requests/request-paritta",
        ],
      },
    ],
  },
  {
    groups: [
      {
        heading: "Parittas",
        slugs: [
          "parittas/invitation-to-devas",
          "parittas/namo-tassa",
          "parittas/three-refuges",
        ],
      },
    ],
  },
  {
    joined: true,
    groups: [{ heading: "Suttas", slugs: ["suttas/dhammacakkappavattana"] }],
  },
  { groups: [{ heading: "Extras", slugs: ["extras/chant-of-metta"] }] },
];
