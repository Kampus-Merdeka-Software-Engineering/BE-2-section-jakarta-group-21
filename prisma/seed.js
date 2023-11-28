import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const tableMenu = [
        {
            id: 1,
            name: "Tuna Pizza and Black Olive",
            description: "This dreamy tuna pizza with red onions and black olives is inspired by a traditional Italian recipe. Light and delicious, this pizza is also high in protein.",
            price: "189000",
            stok: "50",
            category: "Popular Dishes",
            image: "1700585005428.png"
        },
        {
            id: 2,
            name: "Sprinkles Love pizza",
            description: "This is our special menu, apart from its very artistic shape and the taste combined with cheese and tomatoes is something interesting.",
            price: "200000",
            stok: "50",
            category: "Popular Dishes",
            image: "1700585357517.png"
        },
        {
            id: 3,
            name: "Classic Pizza",
            description: "The pizza texture is thin, with crispy pizza edges, the play of flavors and textures of pizza is perfect for lunch or dinner.",
            price: "189000",
            stok: "50",
            category: "Popular Dishes",
            image: "1700585467136.png"
        },
        {
            id: 4,
            name: "Banana Ice Cream WithChocolate & Welnuts",
            description: "Real banana ice cream combined with savory nuts gives a very unique taste when you eat it.",
            price: "70000",
            stok: "50",
            category: "Popular Dishes",
            image: "1700586743094.png"
        },
        {
            id: 5,
            name: "Healthy Pasta",
            description: "Healthy pasta with Brussels sprouts and toasted almonds. Almonds, lemon, and Brussels sprouts provide a simple flavor base for kamut fusilli pasta.",
            price: "120000",
            stok: "50",
            category: "Popular Dishes",
            image: "1700587319516.png"
        },
        {
            id: 6,
            name: "Cherry Cheesecake",
            description: "Soft cheese cake combined with sweet and beautiful cherry sauce makes an amazing impression in the mouth.",
            price: "79000",
            stok: "50",
            category: "Popular Dishes",
            image: "1700587455079.png"
        },
        {
            id: 7,
            name: "Salmon Avocado Salad",
            description: "The salmon is served over fresh greens, creamy avocado, and crunchy greens, creating the perfect balance of flavors and textures.",
            price: "145000",
            stok: "50",
            category: "New Menu",
            image: "1700587603735.png"
        },
        {
            id: 8,
            name: "Vegan Blueberry and Coconut Muffins",
            description: "Soft, moist and fluffly vegan blueberry and coconut muffins! Perfect for breakfast or anytime of the day snack! Ready in under an hour.",
            price: "50000",
            stok: "50",
            category: "New Menu",
            image: "1700587807485.png"
        },
        {
            id: 9,
            name: "Sweet and Sour Sausage Meatball Smile",
            description: "Contains several pieces of sausage and soft meatballs inside with a splash of savory sweet and sour sauce.",
            price: "189000",
            stok: "50",
            category: "New Menu",
            image: "1700587955074.png"
        },
        {
            id: 10,
            name: "Berlussconi Pizza",
            description: "The toppings for this Finnish pizza are similar to pizza in general, namely tomato sauce, cheese, chanterelle mushrooms and sliced ​​onions.",
            price: "187000",
            stok: "50",
            category: "Other Menu",
            image: "1700588169619.png"
        },
        {
            id: 11,
            name: "Marinara Pizza",
            description: "Pizza marinara is a classic Neapolitan pizza. There's no cheese, so it's all about the tomatoes, simply garnished with garlic and oregano.",
            price: "171000",
            stok: "50",
            category: "Other Menu",
            image: "1700588328279.png"
        },
        {
            id: 12,
            name: "California Pizza",
            description: "Cheese and tomatoes are used greatly enhances the umami taste of this pizza and makes the food taste rich and delicious.",
            price: "180000",
            stok: "50",
            category: "Other Menu",
            image: "1700588536584.png"
        },
        {
            id: 13,
            name: "Chicken Pasta in Tomatto Sauce",
            description: "This penne pasta recipe is a simple way to bring the flavors of Italy to your dinner table.",
            price: "130000",
            stok: "50",
            category: "Other Menu",
            image: "1700588718275.png"
        },
        {
            id: 14,
            name: "Chocolate Ice Cream",
            description: "Chocolate ice cream which has the right sweet taste and soft texture will make you happy when you eat it.",
            price: "45000",
            stok: "50",
            category: "Other Menu",
            image: "1700588853468.png"
        },
        {
            id: 15,
            name: "Creamy Cajun Shrimp Pasta",
            description: "Soft cheese cake combined with sweet and beautiful cherry sauce makes an amazing impression in the mouth.",
            price: "130000",
            stok: "50",
            category: "Other Menu",
            image: "1700589024250.png"
        },
        {
            id: 16,
            name: "Sprite",
            description: "Bottled carbonated drinks with lemon and lime flavors, come in practical 330ml small cans.",
            price: "23000",
            stok: "50",
            category: "Exciting Drinks",
            image: "1700589198558.png"
        },
        {
            id: 17,
            name: "Fanta Orange",
            description: "Orange flavored carbonated drink, comes in a 330ml bottle. Enjoy maximum freshness by drinking it cold.",
            price: "23000",
            stok: "50",
            category: "Exciting Drinks",
            image: "1700589343097.png"
        },
        {
            id: 18,
            name: "Coca-Cola",
            description: "Coca Cola Original is a cola-flavored carbonated drink, available in a practical small can containing 330ml. Enjoy its most delicious freshness by drinking it cold.",
            price: "23000",
            stok: "50",
            category: "Exciting Drinks",
            image: "1700589690536.png"
        },
        {
            id: 19,
            name: "Cold Brew Coffee",
            description: "Cold brew is simply coffee brewed with cold water, not hot water, and a long soaking process of between 12-24 hours. So it produces a different taste.",
            price: "55000",
            stok: "50",
            category: "Exciting Drinks",
            image: "1700589968352.png"
        },
        {
            id: 20,
            name: "Old Fashioned Spiced Honey Bourbon",
            description: "The key to this drink lies in the spiced honey syrup. A mixture of sweet honey and warming spices, cinnamon, cardamom and ginger.",
            price: "45000",
            stok: "50",
            category: "Exciting Drinks",
            image: "1700590217081.png"
        },
        {
            id: 21,
            name: "Tropical Floods",
            description: "Tropical Floods is a Blueberry flavored soda drink, made hygienically and without preservatives. Suitable to enjoy when relaxing.",
            price: "48000",
            stok: "50",
            category: "Exciting Drinks",
            image: "1700590314268.png"
        },
    ];

    const tabelTestimoni = [
        {
            id: 1,
            name: "Anthony David Alexander",
            description: "The sensation of vegetable pizza for me is amazing and very suitable for a healthy lifestyle",
            image: "1701164042979.png",
            rating: "lima"
        },
        {
            id: 2,
            name: "Audrey Carol",
            description: "The taste is very good and so is the service. I ordered a classic pizza which was amazing. My sister had amazing pasta",
            image: "1701164520038.png",
            rating: "lima"
        },
        {
            id: 3,
            name: "Ryna Azura Dacota",
            description: "This place has become one of my favorite places because the menu served really makes me happy",
            image: "1701164693651.png",
            rating: "empat"
        },
        {
            id: 4,
            name: "Carolina Gracella",
            description: "I really recomend, It was late at night and we were hungry. They make it perfect. Hot and delicious. Very polite for late night orders!",
            image: "1701164851745.png",
            rating: "lima"
        },
        {
            id: 5,
            name: "Danielle Marsh",
            description: "Affordable, the taste so good and i think yous should try it.",
            image: "1701164964344.png",
            rating: "empat"
        },
        {
            id: 6,
            name: "Karina Claudia",
            description: "This pizza is perfect for celebrating with family and friends, I really like the classic pizza.",
            image: "1701165120841.png",
            rating: "lima"
        },
        {
            id: 7,
            name: "Felix Hann",
            description: "I was recommended by my office friend, and I think this pizza is very delicious.",
            image: "1701165225382.png",
            rating: "empat"
        },
    ];

    await prisma.menu.createMany({
        data: tableMenu,
    });

    await prisma.testimoni.createMany({
        data: tabelTestimoni,
    });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
