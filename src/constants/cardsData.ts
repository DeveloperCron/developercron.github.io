/**
 * Represents data for a card component used in a user interface.
 */
export type ICardData = {
  /**
   * The title or heading of the card.
   */
  title: string;

  /**
   * The date associated with the card.
   */
  date: string;

  /**
   * A brief description or summary of the content on the card.
   */
  description: string;
};

const cardsData: ReadonlyArray<ICardData> = [
  {
    title: "Fruitolo",
    date: "2022-2023",
    description:
      "Fruitolo is a juice-bar in the Roblox platform. As a developer of the place, I was given multiple tasks from creating essential systems to full functioning UI’s. ",
  },
  {
    title: "Pieza",
    date: "2020-2022",
    description:
      "Pieza is a pizzeria in the Roblox platform. I was responsible for the development of the games along with managing parts of the public relations. ",
  },
  {
    title: "MyIntro",
    date: "2023",
    description:
      "Basic electron application for presentations! With a sleek and modern design, this intro screen is perfect for grabbing your audience's attention from the start.",
  },
];

export { cardsData };

