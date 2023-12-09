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
            image: "https://i.ibb.co/yVPSdtY/e80edf41a158.png",
            category: "Popular Dishes"
        },
        {
            id: 2,
            name: "Sprinkles Love pizza",
            description: "This is our special menu, apart from its very artistic shape and the taste combined with cheese and tomatoes is something interesting.",
            price: "200000",
            stok: "50",
            image: "https://i.ibb.co/T87jDgM/222df3c08452.png",
            category: "Popular Dishes"
        },
        {
            id: 3,
            name: "Classic Pizza",
            description: "The pizza texture is thin, with crispy pizza edges, the play of flavors and textures of pizza is perfect for lunch or dinner.",
            price: "189000",
            stok: "50",
            image: "https://i.ibb.co/6Jjg4rz/04b426a99485.png",
            category: "Popular Dishes"
        },
        {
            id: 4,
            name: "Banana Ice Cream WithChocolate & Welnuts",
            description: "Real banana ice cream combined with savory nuts gives a very unique taste when you eat it.",
            price: "70000",
            stok: "50",
            image: "https://i.ibb.co/x14q5y8/f5ae43796171.png",
            category: "Popular Dishes"
        },
        {
            id: 5,
            name: "Healthy Pasta",
            description: "Healthy pasta with Brussels sprouts and toasted almonds. Almonds, lemon, and Brussels sprouts provide a simple flavor base for kamut fusilli pasta.",
            price: "120000",
            stok: "50",
            image: "https://i.ibb.co/NWLkrcP/49948c508aba.png",
            category: "Popular Dishes"
        },
        {
            id: 6,
            name: "Cherry Cheesecake",
            description: "Soft cheese cake combined with sweet and beautiful cherry sauce makes an amazing impression in the mouth.",
            price: "79000",
            stok: "50",
            image: "https://i.ibb.co/PgsWs1F/27b292e36c83.png",
            category: "Popular Dishes"
        },
        {
            id: 7,
            name: "Salmon Avocado Salad",
            description: "The salmon is served over fresh greens, creamy avocado, and crunchy greens, creating the perfect balance of flavors and textures.",
            price: "145000",
            stok: "50",
            image: "https://i.ibb.co/dQ10TQN/c9bf553ace19.png",
            category: "New Menu"
        },
        {
            id: 8,
            name: "Vegan Blueberry and Coconut Muffins",
            description: "Soft, moist and fluffly vegan blueberry and coconut muffins! Perfect for breakfast or anytime of the day snack! Ready in under an hour.",
            price: "50000",
            stok: "50",
            image: "https://i.ibb.co/FhWvL00/c8fd52ebccf3.png",
            category: "New Menu"
        },
        {
            id: 9,
            name: "Sweet and Sour Sausage Meatball Smile",
            description: "Contains several pieces of sausage and soft meatballs inside with a splash of savory sweet and sour sauce.",
            price: "189000",
            stok: "50",
            image: "https://i.ibb.co/Vgj41KQ/199bb258f834.png",
            category: "New Menu"
        },
        {
            id: 10,
            name: "Berlussconi Pizza",
            description: "The toppings for this Finnish pizza are similar to pizza in general, namely tomato sauce, cheese, chanterelle mushrooms and sliced ​​onions.",
            price: "187000",
            stok: "50",
            image: "https://i.ibb.co/n0VjHtv/119b9a1821b7.png",
            category: "Other Menu"
        },
        {
            id: 11,
            name: "Marinara Pizza",
            description: "Pizza marinara is a classic Neapolitan pizza. There's no cheese, so it's all about the tomatoes, simply garnished with garlic and oregano.",
            price: "171000",
            stok: "50",
            image: "https://i.ibb.co/z7sCNfL/8fd48426a458.png",
            category: "Other Menu"
        },
        {
            id: 12,
            name: "California Pizza",
            description: "Cheese and tomatoes are used greatly enhances the umami taste of this pizza and makes the food taste rich and delicious.",
            price: "180000",
            stok: "50",
            image: "https://i.ibb.co/RbgpKZT/b245846c4bbf.png",
            category: "Other Menu"
        },
        {
            id: 13,
            name: "Chicken Pasta in Tomatto Sauce",
            description: "This penne pasta recipe is a simple way to bring the flavors of Italy to your dinner table.",
            price: "130000",
            stok: "50",
            image: "https://i.ibb.co/WHPBX9P/41d94b046b50.png",
            category: "Other Menu"
        },
        {
            id: 14,
            name: "Chocolate Ice Cream",
            description: "Chocolate ice cream which has the right sweet taste and soft texture will make you happy when you eat it.",
            price: "45000",
            stok: "50",
            image: "https://i.ibb.co/rvgfHNN/b3e2bec9d107.png",
            category: "Other Menu"
        },
        {
            id: 15,
            name: "Creamy Cajun Shrimp Pasta",
            description: "Soft cheese cake combined with sweet and beautiful cherry sauce makes an amazing impression in the mouth.",
            price: "130000",
            stok: "50",
            image: "https://i.ibb.co/QJvHWz8/3c784a84f939.png",
            category: "Other Menu"
        },
        {
            id: 16,
            name: "Sprite",
            description: "Bottled carbonated drinks with lemon and lime flavors, come in practical 330ml small cans.",
            price: "23000",
            stok: "50",
            image: "https://i.ibb.co/Zz43Ryz/36cf1b7ca1ac.png",
            category: "Exciting Drinks"
        },
        {
            id: 17,
            name: "Fanta Orange",
            description: "Orange flavored carbonated drink, comes in a 330ml bottle. Enjoy maximum freshness by drinking it cold.",
            price: "23000",
            stok: "50",
            image: "https://i.ibb.co/rp8SqnG/989cb241b2b5.png",
            category: "Exciting Drinks"
        },
        {
            id: 18,
            name: "Coca-Cola",
            description: "Coca Cola Original is a cola-flavored carbonated drink, available in a practical small can containing 330ml. Enjoy its most delicious freshness by drinking it cold.",
            price: "23000",
            stok: "50",
            image: "https://i.ibb.co/cbcTL42/a75bd9f77b34.png",
            category: "Exciting Drinks"
        },
        {
            id: 19,
            name: "Cold Brew Coffee",
            description: "Cold brew is simply coffee brewed with cold water, not hot water, and a long soaking process of between 12-24 hours. So it produces a different taste.",
            price: "55000",
            stok: "50",
            image: "https://i.ibb.co/j6KdCts/cb576368b8b5.png",
            category: "Exciting Drinks"
        },
        {
            id: 20,
            name: "Old Fashioned Spiced Honey Bourbon",
            description: "The key to this drink lies in the spiced honey syrup. A mixture of sweet honey and warming spices, cinnamon, cardamom and ginger.",
            price: "45000",
            stok: "50",
            image: "https://i.ibb.co/sW7Ddkv/5b0959e075e6.png",
            category: "Exciting Drinks"
        },
        {
            id: 21,
            name: "Tropical Floods",
            description: "Tropical Floods is a Blueberry flavored soda drink, made hygienically and without preservatives. Suitable to enjoy when relaxing.",
            price: "48000",
            stok: "50",
            image: "https://i.ibb.co/R4Kt8Yd/a4aa1e99f2d8.png",
            category: "Exciting Drinks"
        }
    ];

    const tabelTestimoni = [
        {
            id: 1,
            name: "Anthony David Alexander",
            description: "The sensation of vegetable pizza for me is amazing and very suitable for a healthy lifestyle",
            image: "https://i.ibb.co/9yydPhK/26aab4237490.png",
            rating: "lima"
        },
        {
            id: 2,
            name: "Audrey Carol",
            description: "The taste is very good and so is the service. I ordered a classic pizza which was amazing. My sister had amazing pasta",
            image: "https://i.ibb.co/fqNNk48/7995bef42cd4.png",
            rating: "lima"
        },
        {
            id: 3,
            name: "Ryna Azura Dacota",
            description: "This place has become one of my favorite places because the menu served really makes me happy",
            image: "https://i.ibb.co/zQJxks2/e25c7648b741.png",
            rating: "empat"
        },
        {
            id: 4,
            name: "Carolina Gracella",
            description: "I really recomend, It was late at night and we were hungry. They make it perfect. Hot and delicious. Very polite for late night orders!",
            image: "https://i.ibb.co/r48Myxt/6962d6e2909e.png",
            rating: "lima"
        },
        {
            id: 5,
            name: "Danielle Marsh",
            description: "Affordable, the taste so good and i think yous should try it.",
            image: "https://i.ibb.co/py6Vrmy/185328eb4075.png",
            rating: "empat"
        },
        {
            id: 6,
            name: "Karina Claudia",
            description: "This pizza is perfect for celebrating with family and friends, I really like the classic pizza.",
            image: "https://i.ibb.co/tMtb2cq/45c0800fe9b3.png",
            rating: "lima"
        },
        {
            id: 7,
            name: "Felix Hann",
            description: "I was recommended by my office friend, and I think this pizza is very delicious.",
            image: "https://i.ibb.co/VHqstZX/6b1f17c8b5ac.png",
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
