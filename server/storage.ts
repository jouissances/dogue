import { type DogBreed, type InsertDogBreed } from "@shared/schema";

export interface IStorage {
  listBreeds(): Promise<DogBreed[]>;
  getBreed(id: string): Promise<DogBreed | undefined>;
  searchBreeds(query: string): Promise<DogBreed[]>;
  createBreed(breed: InsertDogBreed): Promise<DogBreed>;
}

export class MemStorage implements IStorage {
  private breeds: Map<string, DogBreed>;

  constructor(initialBreeds: DogBreed[] = []) {
    this.breeds = new Map();
    initialBreeds.forEach((breed) => {
      this.breeds.set(breed.id, breed);
    });
  }

  async listBreeds(): Promise<DogBreed[]> {
    return Array.from(this.breeds.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  async getBreed(id: string): Promise<DogBreed | undefined> {
    return this.breeds.get(id);
  }

  async searchBreeds(query: string): Promise<DogBreed[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.breeds.values()).filter(
      (breed) =>
        breed.name.toLowerCase().includes(lowerQuery) ||
        breed.origin.toLowerCase().includes(lowerQuery)
    );
  }

  async createBreed(insertBreed: InsertDogBreed): Promise<DogBreed> {
    const breed: DogBreed = insertBreed as DogBreed;
    this.breeds.set(breed.id, breed);
    return breed;
  }
}

const initialBreeds: DogBreed[] = [
  {
    id: "affenpinscher",
    name: "Affenpinscher",
    image: "/generated_images/Affenpinscher_black_coat_portrait_01e8d695.png",
    origin: "Germany",
    group: "Toy Group",
    history: "The Affenpinscher originated in Germany during the 17th century, with roots possibly dating back to the 1400s. The name translates to 'monkey terrier' in German, referencing their distinctive monkey-like facial expression. Originally bred as ratters to kill mice and rats in stables, shops, and homes during the plague era, these small dogs eventually transitioned from working roles to cherished companion dogs for German society. They influenced the development of other breeds including the Brussels Griffon and Miniature Schnauzer.",
    size: "Toy",
    height: "9.5-11.5 inches (24-29 cm)",
    weight: "7-10 lbs (3-4.5 kg)",
    coat: "Wiry, rough, and shaggy with longer hair forming a mane",
    lifespan: "9-13 years",
    temperament: ["Fearless", "Confident", "Loyal", "Entertaining", "Alert"],
    behavior: "Affenpinschers are fearless little dogs with 'big dog' personalities packed into tiny bodies. Despite their small size, they're confident and will stand up to much larger dogs. They're intelligent and quick learners, though can be stubborn and independent. Known for their clown-like antics and playful behavior, they're entertaining companions. They form strong bonds with their families and make excellent watchdogs with their alert nature and tendency to bark. They're curious and inquisitive, always exploring their environment.",
    trivia: [
      "The name 'Affenpinscher' literally means 'monkey terrier' in German, referring to their distinctive facial expression",
      "Banana Joe V Tani Kazari won Best in Show at Westminster 2013, bringing attention to this rare breed",
      "They're one of the oldest toy breeds in the world, with evidence dating back to the 1400s",
      "Featured in Renaissance artwork and paintings by famous artists including Dürer and Van Eyck",
      "The French nicknamed them 'diablotin moustachu' meaning 'mustached little devil'"
    ],
    coatVariants: [
      { color: "Black", marking: "Solid Black", image: "/generated_images/Affenpinscher_black_coat_portrait_01e8d695.png" },
      { color: "Silver", marking: "Silver Gray", image: "/generated_images/Affenpinscher_silver_gray_coat_3d2d0283.png" },
      { color: "Red", marking: "Red to Tan", image: "/generated_images/Affenpinscher_red_coat_portrait_6ef22417.png" }
    ]
  },
  {
    id: "afghan-hound",
    name: "Afghan Hound",
    image: "/generated_images/Afghan_Hound_cream_coat_30acc900.png",
    origin: "Afghanistan",
    group: "Hound Group (Sighthound)",
    history: "The Afghan Hound is one of the most ancient dog breeds, with origins dating back thousands of years to the cold mountains of Afghanistan, where it was called Tazi. Bred by nomadic tribes to hunt large game including gazelle, hare, and even leopards across harsh mountainous terrain, these elegant sighthounds were prized for their speed, agility, and ability to think independently. British soldiers brought Afghan Hounds to England in the late 1800s. The modern breed descends from two main strains: the Bell-Murray desert type and the Ghazni mountain type. The breed was recognized by the AKC in 1926.",
    size: "Large",
    height: "25-27 inches (64-69 cm)",
    weight: "50-60 lbs (23-27 kg)",
    coat: "Long, fine, silky hair with shorter hair on face and back",
    lifespan: "12-14 years",
    temperament: ["Independent", "Aloof", "Dignified", "Loyal", "Playful"],
    behavior: "Afghan Hounds are dignified yet clownish, aloof yet affectionate - a study in contradictions. They're independent thinkers bred to hunt without human direction, which can make them seem stubborn during training. While they appear aristocratic and reserved with strangers, they form deep bonds with their families and can be affectionate on their own terms. Despite their regal demeanor, they have a playful, silly side during play. They're sensitive dogs that respond best to gentle, positive training methods and have a strong prey drive requiring secure fencing.",
    trivia: [
      "One of the most ancient dog breeds, with DNA confirming origins predating modern breeds",
      "Their large paw pads acted as natural shock absorbers for hunting across rocky Afghan terrain",
      "Despite their elegant appearance, they were bred to hunt dangerous game including leopards",
      "Ranked last in obedience intelligence by Stanley Coren, but this reflects independence rather than lack of intelligence",
      "The breed's distinctive topknot and flowing coat made them popular in dog shows and as artistic subjects"
    ],
    coatVariants: [
      { color: "Cream", marking: "Light Cream", image: "/generated_images/Afghan_Hound_cream_coat_30acc900.png" },
      { color: "Black", marking: "Solid Black", image: "/generated_images/Afghan_Hound_black_coat_4c450e1f.png" },
      { color: "Red", marking: "Red-Gold", image: "/generated_images/Afghan_Hound_red_coat_ca2d360e.png" }
    ]
  },
  {
    id: "airedale-terrier",
    name: "Airedale Terrier",
    image: "/generated_images/Airedale_Terrier_tan_black_6183715b.png",
    origin: "England",
    group: "Terrier Group (King of Terriers)",
    history: "The Airedale Terrier, known as the 'King of Terriers' due to being the largest terrier breed, was developed in the Aire Valley of Yorkshire, England during the mid-1800s. Working-class factory workers crossed the Old English Black and Tan Terrier with Otterhounds to create a versatile hunting and working dog that could hunt otters, rats, and upland game. Originally called Waterside Terriers, they were officially named Airedale Terriers and recognized by the Kennel Club in 1886. They served with distinction in WWI as messenger dogs and sentries, and were owned by several U.S. Presidents.",
    size: "Large",
    height: "22-24 inches (56-61 cm)",
    weight: "50-65 lbs (23-29 kg)",
    coat: "Dense, hard, wiry outer coat with soft undercoat",
    lifespan: "10-13 years",
    temperament: ["Intelligent", "Confident", "Loyal", "Energetic", "Protective"],
    behavior: "Airedales are intelligent, confident dogs with boundless energy and enthusiasm. They're loyal and protective of their families, making excellent watchdogs, yet friendly with proper socialization. Their terrier heritage means they're independent thinkers who can be stubborn, requiring consistent training with positive reinforcement. They're athletic dogs that thrive on activity and excel in dog sports. Despite their working background, they're affectionate family companions who are good with children. Their high drive requires owners who can provide both physical exercise and mental stimulation.",
    trivia: [
      "Served as messenger dogs, sentries, and Red Cross rescue dogs during WWI, with over 2,000 at the front",
      "Owned by three U.S. Presidents: Woodrow Wilson, Warren Harding, and Calvin Coolidge",
      "The largest of all terrier breeds, earning them the title 'King of Terriers'",
      "Used by police forces in Britain, Germany, and the United States for tracking and guard work",
      "Their versatility made them successful hunters of everything from rats to bears"
    ],
    coatVariants: [
      { color: "Black & Tan", marking: "Black Saddle with Tan", image: "/generated_images/Airedale_Terrier_tan_black_6183715b.png" },
      { color: "Grizzle & Tan", marking: "Grizzle with Tan Points", image: "/generated_images/Airedale_Terrier_grizzle_tan_64493ad4.png" },
      { color: "Dark Grizzle", marking: "Dark Grizzle & Tan", image: "/generated_images/Airedale_Terrier_dark_grizzle_4a879e67.png" }
    ]
  },
  {
    id: "akita",
    name: "Akita",
    image: "/generated_images/Akita_white_coat_portrait_37caee8a.png",
    origin: "Japan",
    group: "Working Group",
    history: "The Akita is an ancient Japanese breed from the mountainous Akita Prefecture in northern Japan, with roots dating back over 1,000 years. Originally called Matagi Inu (hunting dog), they were bred to hunt large game including bears, wild boar, and elk, and to guard Japanese royalty. The breed nearly became extinct during WWII but was preserved through dedicated restoration efforts. Helen Keller brought the first Akita to America in 1937 after touring Japan. The legendary Hachiko, an Akita who waited at Shibuya Station for nine years after his owner's death, became a symbol of loyalty. Declared a Japanese Natural Monument in 1931.",
    size: "Large",
    height: "24-28 inches (61-71 cm)",
    weight: "70-130 lbs (32-59 kg)",
    coat: "Thick, plush double coat with dense undercoat",
    lifespan: "10-13 years",
    temperament: ["Loyal", "Courageous", "Dignified", "Independent", "Protective"],
    behavior: "Akitas are dignified, courageous dogs with legendary loyalty to their families. They form deep, devoted bonds and are naturally protective, making them excellent guardians. Independent and strong-willed, they require experienced owners who can provide firm, consistent training with positive methods. They're calm and composed, not excessively playful as adults, and are reserved or aloof with strangers. Akitas can be aggressive toward other dogs, especially same-sex dogs, and have a strong prey drive. Despite their serious nature, they're gentle and patient with family children and are almost cat-like in their cleanliness.",
    trivia: [
      "Helen Keller brought the first Akita to America in 1937, a gift from the Japanese government",
      "Hachiko, the most famous Akita, waited at Shibuya Station for 9 years after his owner's death; a bronze statue honors him",
      "One of seven breeds designated as a Japanese Natural Monument in 1931",
      "In Japan, small Akita statues are given when babies are born or someone is ill, symbolizing health and happiness",
      "The breed nearly went extinct during WWII when dogs were culled for fur or crossed with German Shepherds"
    ],
    coatVariants: [
      { color: "White", marking: "Pure White", image: "/generated_images/Akita_white_coat_portrait_37caee8a.png" },
      { color: "Brindle", marking: "Brindle Pattern", image: "/generated_images/Akita_brindle_coat_portrait_9d5f93ed.png" },
      { color: "Red Fawn", marking: "Red Fawn with Markings", image: "/generated_images/Akita_red_fawn_coat_985fd448.png" }
    ]
  },
  {
    id: "alaskan-klee-kai",
    name: "Alaskan Klee Kai",
    image: "/generated_images/Alaskan_Klee_Kai_gray_white_d9a24b27.png",
    origin: "United States (Alaska)",
    group: "Miscellaneous Class (working toward Non-Sporting)",
    history: "The Alaskan Klee Kai is a relatively new breed developed in Alaska during the 1970s by Linda Spurlin, who wanted to create a smaller companion-sized version of the Alaskan Husky. Through careful selective breeding of small Alaskan and Siberian Huskies with American Eskimo Dogs and Schipperkes, she created this miniature northern breed. The name 'Klee Kai' means 'small dog' in Inuit. The breed was added to the AKC Foundation Stock Service in 2020 and moved to the Miscellaneous Class in 2025, working toward full recognition in the Non-Sporting Group.",
    size: "Small to Medium",
    height: "13-17 inches (33-43 cm)",
    weight: "10-20 lbs (4.5-9 kg)",
    coat: "Thick double coat with facial mask",
    lifespan: "12-16 years",
    temperament: ["Intelligent", "Energetic", "Loyal", "Alert", "Reserved"],
    behavior: "Alaskan Klee Kai are intelligent, energetic dogs that resemble miniature Huskies but have distinctly different temperaments. They're loyal to their families but tend to be reserved and cautious with strangers, unlike the typically friendly Husky. Highly alert and observant, they make excellent watchdogs. They're active dogs requiring daily exercise and mental stimulation, and they excel in dog sports. While affectionate with their families, they can be independent and may have a stubborn streak. Early socialization is important to prevent excessive shyness or wariness.",
    trivia: [
      "One of the newest recognized breeds, developed in the 1970s in Wasilla, Alaska",
      "Despite looking like miniature Huskies, they have very different temperaments and were bred as companions, not working sled dogs",
      "The breed name 'Klee Kai' comes from Athabaskan words meaning 'small dog'",
      "They're highly vocal and will 'talk' to their owners with various sounds beyond barking",
      "Moved to AKC Miscellaneous Class in June 2025, marking progress toward full recognition"
    ],
    coatVariants: [
      { color: "Gray & White", marking: "Gray with White Mask", image: "/generated_images/Alaskan_Klee_Kai_gray_white_d9a24b27.png" },
      { color: "Black & White", marking: "Black with White Mask", image: "/generated_images/Alaskan_Klee_Kai_black_white_1eef935f.png" },
      { color: "Red & White", marking: "Red with White Mask", image: "/generated_images/Alaskan_Klee_Kai_red_white_c57c33ee.png" }
    ]
  },
  {
    id: "alaskan-malamute",
    name: "Alaskan Malamute",
    image: "/generated_images/Alaskan_Malamute_gray_white_4369258e.png",
    origin: "United States (Alaska)",
    group: "Working Group",
    history: "The Alaskan Malamute is one of the oldest Arctic sled dog breeds, developed by the Mahlemut Inuit tribe of Alaska's Norton Sound region over 4,000 years ago. These powerful dogs were bred to haul heavy freight across long distances in harsh Arctic conditions, as well as to hunt seals and protect against polar bears. Unlike racing sled dogs, Malamutes were built for strength and endurance rather than speed. They played a crucial role in the Klondike Gold Rush and numerous Arctic expeditions. The breed nearly became extinct during WWII but was successfully restored. Recognized by the AKC in 1935, they became the official state dog of Alaska in 2010.",
    size: "Large",
    height: "23-25 inches (58-64 cm)",
    weight: "75-85 lbs (34-39 kg)",
    coat: "Thick, coarse double coat with dense undercoat",
    lifespan: "10-14 years",
    temperament: ["Friendly", "Loyal", "Playful", "Dignified", "Affectionate"],
    behavior: "Alaskan Malamutes are friendly, affectionate dogs with a gentle, playful nature despite their powerful build. They're loyal to their families and love being part of family activities. Unlike guard dogs, they're typically friendly with everyone, including strangers. They have strong pack instincts and may challenge for dominance, requiring confident, consistent leadership. Bred to work and pull, they need substantial daily exercise and tasks to stay happy. They can be stubborn and independent but are intelligent and capable learners. Their high prey drive and tendency to roam mean they need secure fencing. They're generally quiet but will howl.",
    trivia: [
      "One of the oldest Arctic sled dog breeds, with a lineage dating back over 4,000 years",
      "Named after the Mahlemut Inuit tribe who developed them in Alaska's Norton Sound region",
      "Designated as the official state dog of Alaska in 2010",
      "Have incredible endurance and can haul loads of up to 3,000 pounds over long distances",
      "Nearly became extinct during WWII but was saved through dedicated breeding programs; all modern Malamutes descend from just 30 dogs"
    ],
    coatVariants: [
      { color: "Gray & White", marking: "Wolf Gray with White", image: "/generated_images/Alaskan_Malamute_gray_white_4369258e.png" },
      { color: "Black & White", marking: "Black with White", image: "/generated_images/Alaskan_Malamute_black_white_58f37e9a.png" },
      { color: "Red & White", marking: "Red with White", image: "/generated_images/Alaskan_Malamute_red_white_14599a70.png" }
    ]
  },
  {
    id: "american-bulldog",
    name: "American Bulldog",
    image: "/generated_images/American_Bulldog_white_coat_b8a58a36.png",
    origin: "United States",
    group: "Foundation Stock Service (working toward Working Group)",
    history: "The American Bulldog is descended from English Bulldogs brought to North America by working-class immigrants in the 17th and 18th centuries. Unlike their English cousins which were bred for show and became stockier, American Bulldogs retained their working abilities as farm dogs. They were used for farm work, hunting wild pigs, and guarding property in the American South. The breed nearly became extinct after WWII but was preserved by John D. Johnson and Alan Scott, who developed two distinct types. Added to the AKC Foundation Stock Service in 2019, the breed is working toward full recognition in the Working Group.",
    size: "Large",
    height: "20-28 inches (51-71 cm)",
    weight: "60-120 lbs (27-54 kg)",
    coat: "Short, smooth coat",
    lifespan: "10-15 years",
    temperament: ["Confident", "Loyal", "Brave", "Friendly", "Energetic"],
    behavior: "American Bulldogs are confident, loyal dogs with strong protective instincts. They're affectionate and gentle with their families, including children, but can be wary of strangers, making them excellent guardians. Despite their powerful build, they're surprisingly agile and athletic, requiring substantial daily exercise. They're intelligent and trainable but can be stubborn, needing consistent, firm guidance from an experienced owner. Early socialization is essential to ensure they're well-adjusted. They have high energy levels and thrive when given jobs to do. Their friendly nature with family contrasts with their vigilant guarding instincts.",
    trivia: [
      "Nearly became extinct after World War II but was saved by dedicated breeders John D. Johnson and Alan Scott",
      "Two main types exist: the Johnson (bully) type and the Scott (standard) type, named after their developers",
      "Despite their intimidating appearance, they're known for being gentle and patient with children in their family",
      "They're excellent working farm dogs and were historically used to catch wild hogs and guard property",
      "One of the few bulldog breeds that retained its athletic ability and wasn't bred solely for appearance"
    ],
    coatVariants: [
      { color: "White", marking: "Predominantly White", image: "/generated_images/American_Bulldog_white_coat_b8a58a36.png" },
      { color: "White & Brown", marking: "White with Brown Patches", image: "/generated_images/American_Bulldog_white_brown_cab88c19.png" },
      { color: "Brindle & White", marking: "White with Brindle Patches", image: "/generated_images/American_Bulldog_brindle_white_a0384631.png" }
    ]
  },
  {
    id: "american-english-coonhound",
    name: "American English Coonhound",
    image: "/generated_images/American_English_Coonhound_redtick_3fd469a2.png",
    origin: "United States",
    group: "Hound Group",
    history: "The American English Coonhound, originally called the English Fox and Coonhound, is descended from English Foxhounds brought to America in the 17th and 18th centuries. Colonists, including George Washington who was an avid foxhunter, imported these dogs and adapted them for American game. Over generations, they were selectively bred for speed, endurance, and the ability to tree raccoons and other game. The breed was recognized by the United Kennel Club in 1905 and gained full AKC recognition in 2011, becoming the 171st AKC breed. They're one of six coonhound breeds recognized by the AKC.",
    size: "Medium to Large",
    height: "23-26 inches (58-66 cm)",
    weight: "45-65 lbs (20-30 kg)",
    coat: "Short, hard, protective coat",
    lifespan: "11-12 years",
    temperament: ["Friendly", "Energetic", "Determined", "Gentle", "Vocal"],
    behavior: "American English Coonhounds are friendly, social dogs with sweet, gentle temperaments. They're energetic and determined hunters with incredible endurance and a strong desire to tree game. At home, they're laid-back and affectionate family companions who love being around people. They're generally good with children and other dogs due to their pack-hunting heritage. Their loud, melodious bay is characteristic of the breed - they're very vocal. They need substantial daily exercise to prevent boredom and have a strong prey drive requiring secure fencing. They're intelligent but can be independent and stubborn, needing patient training.",
    trivia: [
      "George Washington was a prominent breeder of the English Foxhounds that became this breed's ancestors",
      "They have one of the most musical voices among dogs - their distinctive bay can be heard from great distances",
      "Became the 171st breed recognized by the AKC when they achieved full recognition in 2011",
      "They can run for hours tracking game and are built for endurance rather than speed",
      "The 'American' was added to their name to distinguish them from breeds developed in England"
    ],
    coatVariants: [
      { color: "Redtick", marking: "White with Red Ticking", image: "/generated_images/American_English_Coonhound_redtick_3fd469a2.png" },
      { color: "Bluetick", marking: "White with Blue Ticking", image: "/generated_images/American_English_Coonhound_bluetick_435d321b.png" },
      { color: "Tricolor Tick", marking: "Tricolor with Ticking", image: "/generated_images/American_English_Coonhound_tricolor_tick_aedee8a1.png" }
    ]
  },
  {
    id: "american-eskimo-dog",
    name: "American Eskimo Dog",
    image: "/generated_images/American_Eskimo_Dog_white_33bd2a05.png",
    origin: "United States",
    group: "Non-Sporting Group",
    history: "Despite its name, the American Eskimo Dog has no connection to Eskimo culture. The breed descends from white German Spitzes brought to America by German immigrants in the early 1900s. During WWI, anti-German sentiment led to the breed being renamed 'American Eskimo Dog.' They became popular performers in traveling circuses, walking tightropes and performing tricks, which increased their popularity. The breed comes in three sizes: Toy, Miniature, and Standard. They were recognized by the United Kennel Club in 1919 and achieved AKC recognition in 1995, joining the Non-Sporting Group.",
    size: "Small to Medium (three sizes)",
    height: "9-19 inches depending on variety (Toy: 9-12\", Miniature: 12-15\", Standard: 15-19\")",
    weight: "6-35 lbs depending on variety (Toy: 6-10 lbs, Miniature: 10-20 lbs, Standard: 25-35 lbs)",
    coat: "Dense, fluffy white double coat",
    lifespan: "13-15 years",
    temperament: ["Friendly", "Alert", "Intelligent", "Playful", "Protective"],
    behavior: "American Eskimo Dogs are friendly, intelligent companions with a playful, affectionate nature. They're alert watchdogs who will bark to announce visitors, though they're typically friendly once introduced. Highly trainable and eager to please, they excel in dog sports and tricks - their circus heritage is evident in their love of learning. They're devoted to their families and can be reserved with strangers, requiring early socialization. They have moderate energy levels and enjoy both playtime and cuddles. Their intelligence means they need mental stimulation to prevent boredom. They're good with children and make excellent family pets.",
    trivia: [
      "Despite the name, they have no connection to Eskimo culture and were originally German Spitz dogs",
      "They were popular circus performers and the first dog known to walk a tightrope",
      "Come in three distinct size varieties: Toy, Miniature, and Standard - all sharing the same breed standard",
      "Their white fluffy coat and smiling expression earned them the nickname 'the dog beautiful'",
      "The breed was renamed during WWI due to anti-German sentiment; they were previously called German Spitz"
    ],
    coatVariants: [
      { color: "White", marking: "Pure White", image: "/generated_images/American_Eskimo_Dog_white_33bd2a05.png" },
      { color: "Cream", marking: "Cream White", image: "/generated_images/American_Eskimo_Dog_cream_46d7bc1c.png" },
      { color: "Biscuit", marking: "White with Biscuit Cream", image: "/generated_images/American_Eskimo_Dog_biscuit_cream_df61acd3.png" }
    ]
  },
  {
    id: "american-foxhound",
    name: "American Foxhound",
    image: "/generated_images/American_Foxhound_tricolor_coat_e564773f.png",
    origin: "United States",
    group: "Hound Group (Scent Hound)",
    history: "The American Foxhound is one of the oldest American dog breeds and the Virginia state dog. Developed from English and French hounds imported in the 1600s and 1700s, the breed was refined by American colonists including George Washington, who is considered the father of the breed. Washington received French hounds as a gift from Lafayette and crossed them with English hounds to create a faster, lighter hound suited for American fox hunting. The breed was among the first recognized by the AKC in 1886. They were bred for endurance and their melodious voice, which hunters could hear from great distances.",
    size: "Medium to Large",
    height: "21-25 inches (53-64 cm)",
    weight: "60-70 lbs (27-32 kg)",
    coat: "Short, hard, close-lying coat",
    lifespan: "11-13 years",
    temperament: ["Independent", "Gentle", "Friendly", "Determined", "Easygoing"],
    behavior: "American Foxhounds are gentle, easygoing dogs with sweet, tolerant temperaments. They're friendly with people and other dogs, reflecting their pack-hunting heritage. Independent and determined when on a scent, they were bred to hunt for hours without human guidance. This independence can make training challenging - they may ignore commands when focused on a smell. They're not typically cuddly lap dogs but are loyal and affectionate in their own way. They need substantial daily exercise and have a strong prey drive requiring secure fencing. Their melodious howl can be loud and frequent. They're better suited to rural settings than apartments.",
    trivia: [
      "George Washington is considered the father of the American Foxhound and kept a pack at Mount Vernon",
      "One of the oldest American dog breeds and among the first recognized by the AKC in 1886",
      "Designated as the official state dog of Virginia",
      "They can run for hours at a steady pace and were bred for endurance rather than speed",
      "Their characteristic voice - a melodious howl and bay - can be heard up to a mile away by hunters"
    ],
    coatVariants: [
      { color: "Tricolor", marking: "Black, White & Tan", image: "/generated_images/American_Foxhound_tricolor_coat_e564773f.png" },
      { color: "Red & White", marking: "Red with White Markings", image: "/generated_images/American_Foxhound_red_white_c98b863c.png" },
      { color: "Tan & White", marking: "Tan with White Markings", image: "/generated_images/American_Foxhound_tan_white_3c415ded.png" }
    ]
  },
  {
    id: "american-hairless-terrier",
    name: "American Hairless Terrier",
    image: "/generated_images/American_Hairless_Terrier_pink_skin_3debd741.png",
    origin: "United States (Louisiana)",
    group: "Terrier Group",
    history: "The American Hairless Terrier is a relatively new breed that began with a single hairless puppy named Josephine born to Rat Terriers in Louisiana in 1972. Edwin and Willie Scott began a breeding program to perpetuate this unique mutation. The breed was developed entirely in the United States and is the first hairless breed native to America. They were accepted into the AKC Foundation Stock Service in 2011, moved to the Miscellaneous Class in 2014, and achieved full recognition in the Terrier Group in 2016. Both hairless and coated varieties exist, with the hairless being hypoallergenic.",
    size: "Small to Medium",
    height: "12-16 inches (30-41 cm)",
    weight: "12-24 lbs (5-11 kg)",
    coat: "Hairless variety has smooth skin; coated variety has short, smooth coat",
    lifespan: "14-16 years",
    temperament: ["Energetic", "Alert", "Curious", "Intelligent", "Friendly"],
    behavior: "American Hairless Terriers are energetic, alert dogs with typical terrier personalities - curious, intelligent, and always ready for action. They're playful and affectionate with their families, forming strong bonds. Despite lacking the protective coat of other terriers, they retain the breed's hunting instincts and make excellent watchdogs. They're friendly with people when properly socialized and generally good with children. Their intelligence makes them highly trainable and they excel in dog sports. They need regular exercise but their lack of coat means they require sun protection in summer and warmth in winter. They're cleaner than many terriers with no doggy odor.",
    trivia: [
      "The breed began with a single hairless puppy named Josephine born in Louisiana in 1972",
      "First hairless breed developed entirely in the United States",
      "Achieved full AKC recognition in the Terrier Group on January 1, 2016",
      "Unlike many hairless breeds, they have full dentition (complete set of teeth)",
      "They're hypoallergenic and often suitable for people with dog allergies, though they require sunscreen outdoors"
    ],
    coatVariants: [
      { color: "Pink", marking: "Smooth Pink Skin", image: "/generated_images/American_Hairless_Terrier_pink_skin_3debd741.png" },
      { color: "Spotted", marking: "Black & Pink Spots", image: "/generated_images/American_Hairless_Terrier_spotted_skin_00f7c385.png" },
      { color: "Bronze", marking: "Bronze-Toned Skin", image: "/generated_images/American_Hairless_Terrier_bronze_skin_950b02a0.png" }
    ]
  },
  {
    id: "american-leopard-hound",
    name: "American Leopard Hound",
    image: "/generated_images/American_Leopard_Hound_yellow_leopard_b07e34c9.png",
    origin: "United States",
    group: "Foundation Stock Service (future Hound Group)",
    history: "The American Leopard Hound is one of the oldest tree dog breeds in the United States, with origins likely dating to Spanish conquistador dogs. By the early 18th century, the breed was well-established in eastern North Carolina. They were bred for their distinctive leopard-spotted coat and exceptional treeing ability, used to hunt raccoons, squirrels, and other game. The breed nearly became extinct in the 1950s but was saved by the American Leopard Cur Breeders Association formed in 1960. Originally called Leopard Cur, the name was changed to American Leopard Hound in 2008. Recognized by the UKC in 1998 and added to AKC Foundation Stock Service in 2012.",
    size: "Medium to Large",
    height: "21-27 inches (53-69 cm)",
    weight: "35-75 lbs (16-34 kg)",
    coat: "Short, dense coat with distinctive leopard spotting",
    lifespan: "12-15 years",
    temperament: ["Intelligent", "Affectionate", "Energetic", "Protective", "Sociable"],
    behavior: "American Leopard Hounds are intelligent, energetic dogs with strong hunting instincts and exceptional tracking abilities. Despite their working heritage, they're surprisingly affectionate and gentle with their families, especially protective of children. They're sociable dogs that work well in packs and typically get along with other dogs. Their intelligence makes them highly trainable, and they're eager to please their owners. They need substantial exercise and mental stimulation, excelling at tracking, treeing, and dog sports. While gentle at home, they're determined and focused when working. Their protective nature makes them good watchdogs.",
    trivia: [
      "One of the oldest treeing dog breeds in America, possibly descended from Spanish conquistador dogs",
      "Their distinctive leopard-spotted coat pattern is where the breed gets its name",
      "Nearly went extinct in the 1950s but was saved by dedicated breeders who formed a preservation association in 1960",
      "Name changed from Leopard Cur to American Leopard Hound in 2008 to allow participation in coonhound events",
      "Known for being especially gentle and protective with children despite their hunting prowess"
    ],
    coatVariants: [
      { color: "Yellow Leopard", marking: "Yellow with Leopard Spots", image: "/generated_images/American_Leopard_Hound_yellow_leopard_b07e34c9.png" },
      { color: "Blue Leopard", marking: "Blue-Gray with Black Spots", image: "/generated_images/American_Leopard_Hound_blue_leopard_d8957215.png" },
      { color: "Brindle Leopard", marking: "Brindle with Leopard Pattern", image: "/generated_images/American_Leopard_Hound_brindle_leopard_8e3ff0af.png" }
    ]
  },
  {
    id: "beagle",
    name: "Beagle",
    image: "/generated_images/Beagle_dog_portrait_transparent_0eee134e.png",
    origin: "England",
    group: "Hound Group (Scent Hound)",
    history: "The Beagle's exact origins are somewhat mysterious, but similar hounds existed in England before the Roman arrival. Modern Beagles were developed in Great Britain around the 1830s from several breeds, including the Talbot Hound, the North Country Beagle, the Southern Hound, and possibly the Harrier. They were primarily bred for hunting hare, a sport known as beagling. Their excellent sense of smell and tracking instinct made them exceptional hunting companions.",
    size: "Small to Medium",
    height: "13-15 inches (33-38 cm)",
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
    ],
    coatVariants: [
      { color: "Tricolor", marking: "Black, Tan & White", image: "/generated_images/Beagle_tricolor_transparent_portrait_58e03694.png" },
      { color: "Lemon", marking: "Lemon & White", image: "/generated_images/Beagle_lemon_white_transparent_e7e01364.png" },
      { color: "Red", marking: "Red & White", image: "/generated_images/Beagle_red_white_transparent_3a112a98.png" }
    ]
  },
  {
    id: "dachshund",
    name: "Dachshund",
    image: "/generated_images/Dachshund_smooth_red_transparent_4c657c7f.png",
    origin: "Germany",
    group: "Hound Group (Scent Hound)",
    history: "The Dachshund, also known as the 'wiener dog' or 'sausage dog,' was developed in Germany over 300 years ago. The name literally means 'badger dog' in German, as these tenacious hunters were bred to dig into badger dens and flush them out. Their elongated body, short legs, and paddle-like paws made them perfectly suited for this dangerous work. They were also used to hunt rabbits, foxes, and other burrow-dwelling animals. The breed became popular among European royalty, including Queen Victoria, which helped establish their reputation beyond hunting circles.",
    size: "Small (Standard or Miniature)",
    height: "8-9 inches standard, 5-6 inches miniature",
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
    ],
    coatTypes: ["Smooth", "Wirehaired", "Longhaired"],
    coatVariants: [
      { color: "Red", marking: "Solid Red", coatType: "Smooth", image: "/generated_images/Dachshund_smooth_red_transparent_4c657c7f.png" },
      { color: "Black & Tan", marking: "Black with Tan Points", coatType: "Smooth", image: "/generated_images/Dachshund_smooth_black_tan_transparent_b55d7a37.png" },
      { color: "Chocolate", marking: "Chocolate & Tan", coatType: "Smooth", image: "/generated_images/Dachshund_smooth_chocolate_transparent_74c310e7.png" },
      { color: "Red", marking: "Solid Red", coatType: "Wirehaired", image: "/generated_images/Dachshund_wirehaired_red_transparent_9504f6bf.png" },
      { color: "Black & Tan", marking: "Black with Tan Points", coatType: "Wirehaired", image: "/generated_images/Dachshund_wirehaired_black_tan_transparent_562d486a.png" },
      { color: "Chocolate", marking: "Chocolate & Tan", coatType: "Wirehaired", image: "/generated_images/Dachshund_wirehaired_chocolate_transparent_08d6e514.png" },
      { color: "Red", marking: "Solid Red", coatType: "Longhaired", image: "/generated_images/Dachshund_longhaired_red_transparent_b6beb158.png" },
      { color: "Black & Tan", marking: "Black with Tan Points", coatType: "Longhaired", image: "/generated_images/Dachshund_longhaired_black_tan_transparent_f2c050be.png" },
      { color: "Chocolate", marking: "Chocolate & Tan", coatType: "Longhaired", image: "/generated_images/Dachshund_longhaired_chocolate_transparent_cba29bda.png" }
    ]
  },
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    image: "/generated_images/Golden_Retriever_golden_transparent_0f60bab7.png",
    origin: "Scotland",
    group: "Sporting Group (Gundog)",
    history: "The Golden Retriever was developed in Scotland during the mid-19th century by Lord Tweedmouth, who wanted to create the ultimate hunting dog for the Scottish Highlands. He carefully bred Yellow Retriever 'Nous' with the now-extinct Tweed Water Spaniel 'Belle,' then incorporated Bloodhound, Irish Setter, and more Tweed Water Spaniel into the line. The goal was a dog with exceptional retrieving abilities for both water and land, a soft mouth for carrying game birds, and a loyal, trainable temperament. The breed was officially recognized by the Kennel Club in 1911.",
    size: "Large",
    height: "21-24 inches (53-61 cm)",
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
    ],
    coatVariants: [
      { color: "Light Golden", marking: "Cream to Light Gold", image: "/generated_images/Golden_Retriever_light_transparent_b2924cae.png" },
      { color: "Golden", marking: "Classic Golden", image: "/generated_images/Golden_Retriever_golden_transparent_0f60bab7.png" },
      { color: "Dark Golden", marking: "Rich Dark Gold", image: "/generated_images/Golden_Retriever_dark_transparent_3fe93b1d.png" }
    ]
  }
];

export const storage = new MemStorage(initialBreeds);
