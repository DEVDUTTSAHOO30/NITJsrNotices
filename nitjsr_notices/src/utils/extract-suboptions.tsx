import menuData from "../components/accordian/data.json";

interface Suboption {
  name: string;
  link: string;
}

// returns the suboptions of the menu data;
export default function extractSuboptions(
  category: string
): Array<Suboption> | null {
  for (let item of menuData) {
    if (item.name.toLowerCase() === category.toLowerCase()) {
      return item.subOptions;
    }
  }
  return null;
}
