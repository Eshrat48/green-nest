import snakePlant from '../assets/plants/snake-plant.jpg';
import spiderPlant from '../assets/plants/spider-plant.jpg';
import zzPlant from '../assets/plants/zz-plant.jpg';
import peaceLily from '../assets/plants/peace-lily.jpg';
import pothos from '../assets/plants/pothos.jpg';
import monstera from '../assets/plants/monstera.jpg';
import aloeVera from '../assets/plants/aloe-vera.jpg';
import rubberPlant from '../assets/plants/rubber-plant.jpg';
import parlorPalm from '../assets/plants/parlor-palm.jpg';
import chineseEvergreen from '../assets/plants/chinese-evergreen.jpg';
import calathea from '../assets/plants/calathea.jpg';
import dracaena from '../assets/plants/dracaena.jpg';

const plants = [
  {
    plantId: 1,
    plantName: "Snake Plant",
    category: "Air Purifier",
    price: 18,
    rating: 4.8,
    availableStock: 10,
    careLevel: "Easy",
    description: "A hardy plant that purifies indoor air and thrives in low light.",
    image: snakePlant,
    providerName: "UrbanGreen Studio"
  },
  {
    plantId: 2,
    plantName: "Spider Plant",
    category: "Air Purifier",
    price: 12,
    rating: 4.6,
    availableStock: 15,
    careLevel: "Easy",
    description: "Known for its arching leaves and tiny plantlets, perfect for beginners.",
    image: spiderPlant,
    providerName: "GreenJoy Nursery"
  },
  {
    plantId: 3,
    plantName: "ZZ Plant",
    category: "Drought Tolerant",
    price: 25,
    rating: 4.9,
    availableStock: 8,
    careLevel: "Easy",
    description: "Glossy leaves and nearly indestructible, the ZZ is great for low maintenance homes.",
    image: zzPlant,
    providerName: "LeafyHome"
  },
  {
    plantId: 4,
    plantName: "Peace Lily",
    category: "Flowering",
    price: 20,
    rating: 4.7,
    availableStock: 6,
    careLevel: "Moderate",
    description: "Elegant white flowers, prefers indirect light, also purifies air.",
    image: peaceLily,
    providerName: "Indoor Oasis"
  },
  {
    plantId: 5,
    plantName: "Pothos",
    category: "Vining",
    price: 14,
    rating: 4.5,
    availableStock: 16,
    careLevel: "Easy",
    description: "A trailing plant that grows fast and handles a range of conditions.",
    image: pothos,
    providerName: "Plantify"
  },
  {
    plantId: 6,
    plantName: "Monstera Deliciosa",
    category: "Decorative Foliage",
    price: 35,
    rating: 4.9,
    availableStock: 5,
    careLevel: "Moderate",
    description: "Known for its unique split leaves, adds tropical flair to any room.",
    image: monstera,
    providerName: "UrbanGreen Studio"
  },
  {
    plantId: 7,
    plantName: "Aloe Vera",
    category: "Medicinal",
    price: 13,
    rating: 4.6,
    availableStock: 12,
    careLevel: "Easy",
    description: "Soothes burns, tolerates drought, and thrives in bright light.",
    image: aloeVera,
    providerName: "Greener Tomorrow"
  },
  {
    plantId: 8,
    plantName: "Rubber Plant",
    category: "Foliage",
    price: 22,
    rating: 4.4,
    availableStock: 7,
    careLevel: "Moderate",
    description: "Large, glossy leaves provide a dramatic element and clean air.",
    image: rubberPlant,
    providerName: "LeafyHome"
  },
  {
    plantId: 9,
    plantName: "Parlor Palm",
    category: "Low Light",
    price: 19,
    rating: 4.3,
    availableStock: 9,
    careLevel: "Easy",
    description: "Classic indoor palm for low-light corners and stylish homes.",
    image: parlorPalm,
    providerName: "GreenJoy Nursery"
  },
  {
    plantId: 10,
    plantName: "Chinese Evergreen",
    category: "Shade Lover",
    price: 16,
    rating: 4.7,
    availableStock: 14,
    careLevel: "Easy",
    description: "Tolerates poor light and dry air, patterned leaves for variety.",
    image: chineseEvergreen,
    providerName: "Indoor Oasis"
  },
  {
    plantId: 11,
    plantName: "Calathea Orbifolia",
    category: "Decorative Foliage",
    price: 27,
    rating: 4.5,
    availableStock: 4,
    careLevel: "Moderate",
    description: "Broad silvery leaves with stripes; prefers humidity and medium light.",
    image: calathea,
    providerName: "Plantify"
  },
  {
    plantId: 12,
    plantName: "Dracaena Marginata",
    category: "Air Purifier",
    price: 17,
    rating: 4.4,
    availableStock: 11,
    careLevel: "Easy",
    description: "Tall, slender plant with striking edges, great for purifying toxins.",
    image: dracaena,
    providerName: "UrbanGreen Studio"
  }
];

export default plants;
