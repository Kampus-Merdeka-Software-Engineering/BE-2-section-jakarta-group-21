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
    ];

    await prisma.menu.createMany({
        data: tableMenu,
    });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
