// Shared product category data, used by the products overview page,
// the navbar dropdown, and each category's detail page.
export const CATEGORIES = [
  {
    slug: 'meat',
    icon: '🥩',
    title: 'Meat',
    className: 'card-meat',
    shortDescription:
      'Halal goat, beef, chicken, turkey & oxtail, freshly cut and packed to order - perfect for stews, suya & jollof.',
    longDescription:
      "Our meat counter is stocked daily with halal cuts prepared the way you'd expect from home - goat, beef, chicken, turkey, oxtail and more. Tell us how you like it cut and we'll prepare it fresh while you shop.",
    items: [
      { name: 'Goat Meat', description: 'Bone-in or boneless, cut to order.' },
      { name: 'Beef', description: 'Assorted cuts including shank, brisket & stew beef.' },
      { name: 'Chicken', description: 'Whole, drumsticks, wings & gizzards.' },
      { name: 'Oxtail & Cow Foot', description: 'Slow-cook favourites for soups & stews.' },
    ],
  },
  {
    slug: 'groceries',
    icon: '🍲',
    title: 'African Groceries',
    className: 'card-food',
    shortDescription:
      'Rice, gari, fufu, plantain flour, palm oil, dried fish, spices & seasonings to stock a true African pantry.',
    longDescription:
      'From everyday staples to hard-to-find imports, our shelves are packed with the ingredients that make African cooking taste like home - grains, swallows, oils, spices, snacks and dried goods.',
    items: [
      { name: 'Rice & Grains', description: 'Long grain, basmati, ofada & more.' },
      { name: 'Swallows', description: 'Gari, fufu, semovita, plantain & yam flour.' },
      { name: 'Oils & Spices', description: 'Palm oil, groundnut oil, seasoning cubes & spice blends.' },
      { name: 'Dried & Smoked Foods', description: 'Stockfish, dried fish, crayfish & more.' },
    ],
  },
  {
    slug: 'hair-extensions',
    icon: '💁🏾‍♀️',
    title: 'Hair Extensions',
    className: 'card-hair',
    shortDescription:
      'Braiding hair, weaves, wigs & accessories from trusted brands - quality extensions for every look.',
    longDescription:
      "Whether you're braiding, weaving, or wearing a wig, we carry a wide selection of premium hair extensions and accessories from brands you trust - in the textures, lengths and colours you're looking for.",
    items: [
      { name: 'Braiding Hair', description: 'Kanekalon, Marley, and pre-stretched options.' },
      { name: 'Wigs', description: 'Lace fronts and full wigs in multiple styles.' },
      { name: 'Weaves & Bundles', description: 'Human hair & synthetic bundles.' },
      { name: 'Accessories', description: 'Combs, edge control, hair ties & more.' },
    ],
  },
]

export const getCategoryBySlug = (slug) =>
  CATEGORIES.find((category) => category.slug === slug)
