export interface HorizontalCategoryItemT {
    id: string;
    name: string;
    slug: string;
    icon: string;
    subcategories?: {
        title: string;
        items: {
            name: string;
            slug: string;
        }[];
    }[];
}

export const horizontalCategoryData: HorizontalCategoryItemT[] = [
    {
        id: "1",
        name: "Vegetables & Fruit",
        slug: "vegetables-fruit",
        icon: "/assets/eme2023/svg/1/vegetable.svg",
        subcategories: [
            {
                title: "Organic Vegetables",
                items: [
                    { name: "Potato & Tomato", slug: "potato-tomato" },
                    { name: "Cucumber & Capsicum", slug: "cucumber-capsicum" },
                    { name: "Leafy Vegetables", slug: "leafy-vegetables" },
                    { name: "Root Vegetables", slug: "root-vegetables" },
                    { name: "Beans & Okra", slug: "beans-okra" },
                    {
                        name: "Cabbage & Cauliflower",
                        slug: "cabbage-cauliflower",
                    },
                    { name: "Gourd & Drumstick", slug: "gourd-drumstick" },
                    { name: "Specialty", slug: "specialty" },
                ],
            },
            {
                title: "Fresh Fruit",
                items: [
                    { name: "Banana & Papaya", slug: "banana-papaya" },
                    { name: "Kiwi, Citrus Fruit", slug: "kiwi-citrus" },
                    {
                        name: "Apples & Pomegranate",
                        slug: "apples-pomegranate",
                    },
                    { name: "Seasonal Fruits", slug: "seasonal-fruits" },
                    { name: "Mangoes", slug: "mangoes" },
                    { name: "Fruit Baskets", slug: "fruit-baskets" },
                ],
            },
        ],
    },
    {
        id: "2",
        name: "Beverages",
        slug: "beverages",
        icon: "/assets/eme2023/svg/1/cup.svg",
        subcategories: [
            {
                title: "Energy & Soft Drinks",
                items: [
                    { name: "Soda & Cocktail Mix", slug: "soda-cocktail" },
                    { name: "Sports & Energy Drinks", slug: "sports-energy" },
                    { name: "Non Alcoholic Drinks", slug: "non-alcoholic" },
                    { name: "Packaged Water", slug: "packaged-water" },
                    { name: "Spring Water", slug: "spring-water" },
                    { name: "Flavoured Water", slug: "flavoured-water" },
                ],
            },
        ],
    },
    {
        id: "3",
        name: "Meats & Seafood",
        slug: "meats-seafood",
        icon: "/assets/eme2023/svg/1/meats.svg",
        subcategories: [
            {
                title: "Meat",
                items: [
                    { name: "Fresh Meat", slug: "fresh-meat" },
                    { name: "Frozen Meat", slug: "frozen-meat" },
                    { name: "Marinated Meat", slug: "marinated-meat" },
                    { name: "Fresh & Frozen Meat", slug: "fresh-frozen-meat" },
                ],
            },
            {
                title: "Seafood",
                items: [
                    { name: "Fresh Water Fish", slug: "fresh-water-fish" },
                    { name: "Dry Fish", slug: "dry-fish" },
                    {
                        name: "Frozen Fish & Seafood",
                        slug: "frozen-fish-seafood",
                    },
                    { name: "Marine Water Fish", slug: "marine-water-fish" },
                    { name: "Canned Seafood", slug: "canned-seafood" },
                    { name: "Prawans & Shrimps", slug: "prawans-shrimps" },
                    { name: "Other Seafood", slug: "other-seafood" },
                ],
            },
        ],
    },
    {
        id: "4",
        name: "Breakfast & Dairy",
        slug: "breakfast-dairy",
        icon: "/assets/eme2023/svg/1/breakfast.svg",
        subcategories: [
            {
                title: "Breakfast Cereals",
                items: [
                    { name: "Oats & Porridge", slug: "oats-porridge" },
                    { name: "Kids Cereal", slug: "kids-cereal" },
                    { name: "Muesli", slug: "muesli" },
                    { name: "Flakes", slug: "flakes" },
                    {
                        name: "Granola & Cereal Bars",
                        slug: "granola-cereal-bars",
                    },
                    { name: "Instant Noodles", slug: "instant-noodles" },
                    { name: "Pasta & Macaroni", slug: "pasta-macaroni" },
                    {
                        name: "Frozen Non-Veg Snacks",
                        slug: "frozen-nonveg-snacks",
                    },
                ],
            },
            {
                title: "Dairy",
                items: [
                    { name: "Milk", slug: "milk" },
                    { name: "Curd", slug: "curd" },
                    { name: "Paneer, Tofu & Cream", slug: "paneer-tofu-cream" },
                    { name: "Butter & Margarine", slug: "butter-margarine" },
                    {
                        name: "Condensed, Powdered Milk",
                        slug: "condensed-powdered-milk",
                    },
                    { name: "Buttermilk & Lassi", slug: "buttermilk-lassi" },
                    { name: "Yogurt & Shrikhand", slug: "yogurt-shrikhand" },
                    {
                        name: "Flavoured, Soya Milk",
                        slug: "flavoured-soya-milk",
                    },
                ],
            },
        ],
    },
    {
        id: "5",
        name: "Frozen Foods",
        slug: "frozen-foods",
        icon: "/assets/eme2023/svg/1/frozen.svg",
        subcategories: [
            {
                title: "Noodle, Pasta",
                items: [
                    { name: "Instant Noodles", slug: "instant-noodles" },
                    { name: "Hakka Noodles", slug: "hakka-noodles" },
                    { name: "Cup Noodles", slug: "cup-noodles" },
                    { name: "Vermicelli", slug: "vermicelli" },
                    { name: "Instant Pasta", slug: "instant-pasta" },
                ],
            },
        ],
    },
    {
        id: "6",
        name: "Biscuits & Snacks",
        slug: "biscuits-snacks",
        icon: "/assets/eme2023/svg/1/biscuit.svg",
        subcategories: [
            {
                title: "Biscuits & Cookies",
                items: [
                    { name: "Salted Biscuits", slug: "salted-biscuits" },
                    {
                        name: "Marie, Health, Digestive",
                        slug: "marie-health-digestive",
                    },
                    {
                        name: "Cream Biscuits & Wafers",
                        slug: "cream-biscuits-wafers",
                    },
                    {
                        name: "Glucose & Milk Biscuits",
                        slug: "glucose-milk-biscuits",
                    },
                    { name: "Cookies", slug: "cookies" },
                ],
            },
            {
                title: "Bakery Snacks",
                items: [
                    {
                        name: "Bread Sticks & Lavash",
                        slug: "bread-sticks-lavash",
                    },
                    {
                        name: "Cheese & Garlic Bread",
                        slug: "cheese-garlic-bread",
                    },
                    {
                        name: "Puffs, Patties, Sandwiches",
                        slug: "puffs-patties-sandwiches",
                    },
                    {
                        name: "Breadcrumbs & Croutons",
                        slug: "breadcrumbs-croutons",
                    },
                ],
            },
        ],
    },
    {
        id: "7",
        name: "Grocery & Staples",
        slug: "grocery-staples",
        icon: "/assets/eme2023/svg/1/grocery.svg",
        subcategories: [
            {
                title: "Grocery",
                items: [
                    {
                        name: "Lemon, Ginger & Garlic",
                        slug: "lemon-ginger-garlic",
                    },
                    {
                        name: "Indian & Exotic Herbs",
                        slug: "indian-exotic-herbs",
                    },
                    { name: "Organic Vegetables", slug: "organic-vegetables" },
                    { name: "Organic Fruits", slug: "organic-fruits" },
                ],
            },
            {
                title: "Organic Staples",
                items: [
                    { name: "Organic Dry Fruits", slug: "organic-dry-fruits" },
                    {
                        name: "Organic Dals & Pulses",
                        slug: "organic-dals-pulses",
                    },
                    {
                        name: "Organic Millet & Flours",
                        slug: "organic-millet-flours",
                    },
                    {
                        name: "Organic Sugar, Jaggery",
                        slug: "organic-sugar-jaggery",
                    },
                    {
                        name: "Organic Masalas & Spices",
                        slug: "organic-masalas-spices",
                    },
                    { name: "Organic Rice, Other Rice", slug: "organic-rice" },
                    { name: "Organic Flours", slug: "organic-flours" },
                    {
                        name: "Organic Edible Oil, Ghee",
                        slug: "organic-oil-ghee",
                    },
                ],
            },
        ],
    },
];
