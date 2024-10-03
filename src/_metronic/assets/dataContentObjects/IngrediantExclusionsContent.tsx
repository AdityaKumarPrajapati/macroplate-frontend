interface ExclusionItem {
    id: string;
    label: string;
    dataValue: string;
  }
  
  // Define the type for exclusion data
  interface ExclusionCategory {
    [category: string]: ExclusionItem[];
  }


export const IngrediantExclusionsContentData: ExclusionCategory[] = [
    {'Dairy': [
        {
            id: 'dairy_cheese',
            label: 'Cheese',
            dataValue: 'cheese'
        },
        {
            id: 'dairy_yogurt',
            label: 'Yogurt',
            dataValue: 'yogurt'
        }
    ]},
    {'Eggs': [
        {
            id: 'eggs_egg_yolk',
            label: 'Egg Yolk',
            dataValue: 'egg_yolk'
        },
        {
            id: 'eggs_hard_boiled_eggs',
            label: 'Hard Boiled Eggs',
            dataValue: 'hard_boiled_eggs'
        }
    ]},
    {'Fruit': [
        {
            id: 'fruit_blueberry',
            label: 'Blueberry',
            dataValue: 'blueberry'
        },
        {
            id: 'fruit_grapefruit',
            label: 'Grapefruit',
            dataValue: 'grapefruit'
        },
        {
            id: 'fruit_oranges',
            label: 'Oranges',
            dataValue: 'oranges'
        },
        {
            id: 'fruit_apples',
            label: 'Apples',
            dataValue: 'apples'
        },
        {
            id: 'fruit_berry_compote',
            label: 'Berry Compote',
            dataValue: 'berry_compote'
        },
        {
            id: 'fruit_kiwi',
            label: 'Kiwi',
            dataValue: 'kiwi'
        },
        {
            id: 'fruit_pineapple',
            label: 'Pineapple',
            dataValue: 'pineapple'
        },
        {
            id: 'fruit_banana',
            label: 'Banana',
            dataValue: 'banana'
        },
        {
            id: 'fruit_coconut',
            label: 'Coconut',
            dataValue: 'coconut'
        },
        {
            id: 'fruit_mango',
            label: 'Mangoes',
            dataValue: 'mango'
        },
        {
            id: 'fruit_raisins',
            label: 'Raisins',
            dataValue: 'raisins'
        },
        {
            id: 'fruit_berries',
            label: 'Berries',
            dataValue: 'berries'
        },
        {
            id: 'fruit_grapes',
            label: 'Grapes',
            dataValue: 'grapes'
        },
        {
            id: 'fruit_melons',
            label: 'Melons',
            dataValue: 'melons'
        }
    ]},
    {'Nuts/Seeds': [
        {
            id: 'nuts_almonds',
            label: 'Almonds',
            dataValue: 'almonds'
        },
        {
            id: 'nuts_chia_seeds',
            label: 'Chia Seeds',
            dataValue: 'chia_seeds'
        },
        {
            id: 'nuts_pecans',
            label: 'Pecans',
            dataValue: 'pecans'
        },
        {
            id: 'nuts_pistachios',
            label: 'Pistachios',
            dataValue: 'pistachios'
        },
        {
            id: 'nuts_cashews',
            label: 'Cashews',
            dataValue: 'cashews'
        },
        {
            id: 'nuts_peanuts',
            label: 'Peanuts',
            dataValue: 'peanuts'
        },
        {
            id: 'nuts_pumpkin_seeds',
            label: 'Pumpkin Seeds',
            dataValue: 'pumpkin_seeds'
        },
        {
            id: 'nuts_walnuts',
            label: 'Walnuts',
            dataValue: 'walnuts'
        }
    ]},
    {'Proteins': [
        {
            id: 'protein_ground_beef_protein',
            label: 'Ground Beef',
            dataValue: 'ground_beef_protein'
        },
        {
            id: 'protein_top_sirloin_protein',
            label: 'Top Sirloin',
            dataValue: 'top_sirloin_protein'
        },
        {
            id: 'protein_chicken_breast_protein',
            label: 'Chicken Breast',
            dataValue: 'chicken_breast_protein'
        },
        {
            id: 'protein_ground_turkey_protein',
            label: 'Ground Turkey',
            dataValue: 'ground_turkey_protein'
        },
        {
            id: 'protein_turkey_breast_protein',
            label: 'Turkey Breast',
            dataValue: 'turkey_breast_protein'
        },
        {
            id: 'protein_turkey_bacon_protein',
            label: 'Turkey Bacon',
            dataValue: 'turkey_bacon_protein'
        }
    ]},
    {'Sauces/Spicy': [
        {
            id: 'sauces_agave',
            label: 'Agave',
            dataValue: 'agave'
        },
        {
            id: 'sauces_curry',
            label: 'Curry',
            dataValue: 'curry'
        },
        {
            id: 'sauces_honey',
            label: 'Honey',
            dataValue: 'honey'
        },
        {
            id: 'sauces_spicy',
            label: 'Spicy',
            dataValue: 'spicy'
        },
        {
            id: 'sauces_bbq',
            label: 'BBQ',
            dataValue: 'bbq'
        },
        {
            id: 'sauces_compote',
            label: 'Compote',
            dataValue: 'compote'
        },
        {
            id: 'sauces_marinara',
            label: 'Marinara',
            dataValue: 'marinara'
        },
        {
            id: 'sauces_teriyaki',
            label: 'Teriyaki',
            dataValue: 'teriyaki'
        },
        {
            id: 'sauces_cilantro',
            label: 'Cilantro',
            dataValue: 'cilantro'
        },
        {
            id: 'sauces_honey_mustard',
            label: 'Honey Mustard',
            dataValue: 'honey_mustard'
        },
        {
            id: 'sauces_mustard',
            label: 'Mustard',
            dataValue: 'mustard'
        }
    ]},
    {'Seafood': [
        {
            id: 'seafood_all_seafood',
            label: 'All Seafood',
            dataValue: 'all_seafood'
        },
        {
            id: 'seafood_haddock',
            label: 'Haddock',
            dataValue: 'haddock'
        },
        {
            id: 'seafood_salmon',
            label: 'Salmon',
            dataValue: 'salmon'
        },
        {
            id: 'seafood_tuna',
            label: 'Tuna',
            dataValue: 'tuna'
        },
        {
            id: 'seafood_cod',
            label: 'Cod',
            dataValue: 'cod'
        },
        {
            id: 'seafood_halibut',
            label: 'Halibut',
            dataValue: 'halibut'
        },
        {
            id: 'seafood_shrimp',
            label: 'Shrimp',
            dataValue: 'shrimp'
        },
        {
            id: 'seafood_tilapia',
            label: 'Tilapia',
            dataValue: 'tilapia'
        },
        {
            id: 'seafood_grouper',
            label: 'Grouper',
            dataValue: 'grouper'
        },
        {
            id: 'seafood_mahi_mahi',
            label: 'Mahi Mahi',
            dataValue: 'mahi_mahi'
        },
        {
            id: 'seafood_swordfish',
            label: 'Swordfish',
            dataValue: 'swordfish'
        }
    ]},
    {'Soy': [
        {
            id: 'soy_edamame',
            label: 'Edamame',
            dataValue: 'edamame'
        },
        {
            id: 'soy_soy_sauce',
            label: 'Soy Sauce',
            dataValue: 'soy_sauce'
        }
    ]},
    {'Veggies': [
        {
            id: 'veggies_artichoke',
            label: 'Artichoke',
            dataValue: 'artichoke'
        },
        {
            id: 'veggies_corn',
            label: 'Corn',
            dataValue: 'corn'
        },
        {
            id: 'veggies_kale',
            label: 'Kale',
            dataValue: 'kale'
        },
        {
            id: 'veggies_pickles',
            label: 'Pickles',
            dataValue: 'pickles'
        },
        {
            id: 'veggies_asparagus',
            label: 'Asparagus',
            dataValue: 'asparagus'
        },
        {
            id: 'veggies_carrots',
            label: 'Carrots',
            dataValue: 'carrots'
        },
        {
            id: 'veggies_mushrooms',
            label: 'Mushrooms',
            dataValue: 'mushrooms'
        },
        {
            id: 'veggies_spinach',
            label: 'Spinach',
            dataValue: 'spinach'
        },
        {
            id: 'veggies_beets',
            label: 'Beets',
            dataValue: 'beets'
        },
        {
            id: 'veggies_cauliflower',
            label: 'Cauliflower',
            dataValue: 'cauliflower'
        },
        {
            id: 'veggies_okra',
            label: 'Okra',
            dataValue: 'okra'
        },
        {
            id: 'veggies_sweet_potato',
            label: 'Sweet Potato',
            dataValue: 'sweet_potato'
        },
        {
            id: 'veggies_broccoli',
            label: 'Broccoli',
            dataValue: 'broccoli'
        },
        {
            id: 'veggies_cabbage',
            label: 'Cabbage',
            dataValue: 'cabbage'
        },
        {
            id: 'veggies_olives',
            label: 'Olives',
            dataValue: 'olives'
        },
        {
            id: 'veggies_squash',
            label: 'Squash',
            dataValue: 'squash'
        },
        {
            id: 'veggies_brussels_sprouts',
            label: 'Brussels Sprouts',
            dataValue: 'brussels_sprouts'
        },
        {
            id: 'veggies_eggplant',
            label: 'Eggplant',
            dataValue: 'eggplant'
        },
        {
            id: 'veggies_onions',
            label: 'Onions',
            dataValue: 'onions'
        },
        {
            id: 'veggies_tomato',
            label: 'Tomato',
            dataValue: 'tomato'
        },
        {
            id: 'veggies_bell_pepper',
            label: 'Bell Pepper',
            dataValue: 'bell_pepper'
        },
        {
            id: 'veggies_green_beans',
            label: 'Green Beans',
            dataValue: 'green_beans'
        },
        {
            id: 'veggies_peas',
            label: 'Peas',
            dataValue: 'peas'
        },
        {
            id: 'veggies_zucchini',
            label: 'Zucchini',
            dataValue: 'zucchini'
        },
        {
            id: 'veggies_cucumbers',
            label: 'Cucumbers',
            dataValue: 'cucumbers'
        }
    ]},
    {'Grains': [
        {
            id: 'whole_brown_rice',
            label: 'Brown Rice',
            dataValue: 'brown_rice'
        },
        {
            id: 'whole_quinoa',
            label: 'Quinoa',
            dataValue: 'quinoa'
        },
        {
            id: 'whole_wheat',
            label: 'Wheat',
            dataValue: 'wheat'
        },
        {
            id: 'whole_white_rice',
            label: 'White Rice',
            dataValue: 'white_rice'
        }
    ]},
]