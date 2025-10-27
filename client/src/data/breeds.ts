import type { DogBreed } from "@shared/schema";
import beagleImg from "@assets/generated_images/Beagle_dog_portrait_transparent_0eee134e.png";
import dachshundImg from "@assets/generated_images/Dachshund_dog_portrait_transparent_be40d679.png";
import goldenRetrieverImg from "@assets/generated_images/Golden_Retriever_dog_portrait_1f588c8d.png";

export const dogBreeds: DogBreed[] = [
  {
    id: "beagle",
    name: "Beagle",
    image: beagleImg,
    origin: "England",
    history: "The Beagle's exact origins are somewhat mysterious, but similar hounds existed in England before the Roman arrival. Modern Beagles were developed in Great Britain around the 1830s from several breeds, including the Talbot Hound, the North Country Beagle, the Southern Hound, and possibly the Harrier. They were primarily bred for hunting hare, a sport known as beagling. Their excellent sense of smell and tracking instinct made them exceptional hunting companions.",
    size: "Small to Medium",
    weight: "20-30 lbs (9-13.5 kg)",
    coat: "Short, dense, weather-resistant double coat",
    lifespan: "12-15 years",
    temperament: ["Friendly", "Curious", "Merry", "Gentle", "Determined"],
    behavior: "Beagles are known for their even temperament and lack of inherited health problems. They are gentle, sweet, and incredibly friendly dogs who love being around people and other dogs. Their curious nature means they love to explore and follow interesting scents. Beagles are intelligent but can be stubborn, making training both rewarding and challenging. They're excellent with children and make wonderful family pets.",
    trivia: [
      "Beagles have approximately 220 million scent receptors, compared to humans who have only 5 million",
      "Snoopy from the Peanuts comic strip is perhaps the world's most famous Beagle",
      "President Lyndon B. Johnson owned several Beagles named Him, Her, and Edgar",
      "The name 'Beagle' may come from the French word 'begueule' meaning 'open throat,' referring to their distinctive howl",
      "Beagles are still used for hunting in packs in several countries, but are also popular detection dogs for prohibited agricultural imports"
    ]
  },
  {
    id: "dachshund",
    name: "Dachshund",
    image: dachshundImg,
    origin: "Germany",
    history: "The Dachshund, also known as the 'wiener dog' or 'sausage dog,' was developed in Germany over 300 years ago. The name literally means 'badger dog' in German, as these tenacious hunters were bred to dig into badger dens and flush them out. Their elongated body, short legs, and paddle-like paws made them perfectly suited for this dangerous work. They were also used to hunt rabbits, foxes, and other burrow-dwelling animals. The breed became popular among European royalty, including Queen Victoria, which helped establish their reputation beyond hunting circles.",
    size: "Small (Standard or Miniature)",
    weight: "16-32 lbs standard, under 11 lbs miniature",
    coat: "Three varieties: Smooth, Wirehaired, or Longhaired",
    lifespan: "12-16 years",
    temperament: ["Clever", "Stubborn", "Devoted", "Brave", "Lively"],
    behavior: "Dachshunds are spirited, courageous dogs with larger-than-life personalities packed into their small bodies. They're incredibly loyal to their families and can be quite protective, sometimes not realizing their small size. Despite their hunting background, they make excellent companion dogs and adapt well to various living situations. Dachshunds can be stubborn and independent, traits that served them well when hunting, but may require patience during training. They're playful and affectionate with their family members.",
    trivia: [
      "Dachshunds were the first Olympic mascot - Waldi represented the 1972 Munich Olympic Games",
      "Pablo Picasso owned a Dachshund named Lump who appeared in many of his paintings",
      "Their unique body shape can span a badger's burrow, allowing them to fight the badger underground",
      "During World War I, Dachshunds faced discrimination due to their German heritage, and were sometimes called 'liberty pups'",
      "Crusoe the Celebrity Dachshund has millions of followers on social media and has published bestselling books"
    ]
  },
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    image: goldenRetrieverImg,
    origin: "Scotland",
    history: "The Golden Retriever was developed in Scotland during the mid-19th century by Lord Tweedmouth, who wanted to create the ultimate hunting dog for the Scottish Highlands. He carefully bred Yellow Retriever 'Nous' with the now-extinct Tweed Water Spaniel 'Belle,' then incorporated Bloodhound, Irish Setter, and more Tweed Water Spaniel into the line. The goal was a dog with exceptional retrieving abilities for both water and land, a soft mouth for carrying game birds, and a loyal, trainable temperament. The breed was officially recognized by the Kennel Club in 1911.",
    size: "Large",
    weight: "55-75 lbs (25-34 kg)",
    coat: "Dense, water-repellent double coat, ranging from cream to dark golden",
    lifespan: "10-12 years",
    temperament: ["Intelligent", "Friendly", "Reliable", "Trustworthy", "Kind"],
    behavior: "Golden Retrievers are renowned for their gentle, loving nature and exceptional intelligence. They're eager to please, which makes them highly trainable and excellent working dogs in roles such as guide dogs, therapy dogs, and search-and-rescue. Goldens are patient and gentle with children, making them ideal family pets. They maintain their playful, puppy-like behavior well into adulthood and require regular exercise and mental stimulation. Their friendly disposition means they're typically poor guard dogs, as they're more likely to greet intruders with a wagging tail.",
    trivia: [
      "Golden Retrievers consistently rank among the top 5 most popular dog breeds in the United States",
      "President Gerald Ford's Golden Retriever, Liberty, lived in the White House and had her own puppies there",
      "The Golden Retriever named Bretagne was one of the search and rescue dogs at Ground Zero after 9/11",
      "They can carry an egg in their mouth without breaking it, demonstrating their famously 'soft mouth'",
      "Golden Retrievers hold several Guinness World Records, including loudest bark and most tennis balls held in the mouth at once (five balls)"
    ]
  }
];
