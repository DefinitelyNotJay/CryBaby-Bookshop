import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const labelGroup = ["ขายดี", "มาใหม่", "โปรโมชั่น", "ฟรีกระจาย", "ฮิตขึ้นหิ้ง"];
const categoriesName = await prisma.category.findMany({
  select: { name: true },
});

// labelGroup.map((label) => {
//   const text = categoriesName.map((category) => {
//     return label + "ใน " + category.name
//   });
//   console.log(text)
// });

// categoriesName.map(category=>{
//   const text = labelGroup.map(label=>{
//     return label + "ใน " + category.name
//   })
//   console.log(text)
// })

async function booksCategories() {
  return await prisma.category.findMany();
}

async function booksSortedByRate() {
  return await prisma.book.findMany({
    orderBy: { rating: "desc" },
    include: {
      author: true,
    },
  });
}

async function booksSortedByCategoryAndType(type) {
  const categories = (await booksCategories()).map(
    (category) => category.value
  );
  const sortedType = {
    [type]: "desc",
  };

  const data = categories.map(async (categoryValue) => {
    return await prisma.book.findMany({
      where: {
        categories: {
          some: {
            category: {
              value: categoryValue,
            },
          },
        },
      },
      orderBy: sortedType,
      // take: 5,
    });
  });
  return data;
}

async function booksSortedByDate() {
  return await prisma.book.findMany({
    orderBy: { created_at: "desc" },
    include: {
      author: true,
    },
  });
}

async function booksHitSortedByCategory(categoryValue) {
  return await prisma.book.findMany({
    where: {
      categories: {
        some: {
          category: {
            value: categoryValue,
          },
        },
      },
    },
    include: {
      author: true,
    },
    orderBy: {
      rating: "desc",
    },
  });
}

export async function home(req, res, next) {
  const bestsellers = await booksSortedByRate();

  const news = await booksSortedByDate();

  const homeData = {
    bestsellers: bestsellers,
    news: news,
  };

  res.status(200).json(homeData);
}

export async function hit(req, res, next) {
  const booksHit = await booksSortedByRate();
  const booksHitFantasy = await booksHitSortedByCategory("fantasy");
  const booksHitAdventure = await booksHitSortedByCategory("adventure");

  const responseData = [
    {
      label: "ฮิตขึ้นหิ้ง",
      books: booksHit,
    },
    {
      label: "ฮิตขึ้นหิ้งใน แฟนตาซี",
      books: booksHitFantasy,
    },
    {
      label: "ฮิตขึ้นหิ้งใน ผจญภัย",
      books: booksHitAdventure,
    },
  ];
  res.status(200).json(responseData);
}
