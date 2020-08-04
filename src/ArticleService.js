const articles = [
  {
    id: 1,
    title: "Article Title 1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit magni aut,
          ut perspiciatis consectetur non ratione. Modi porro quam officia, debitis, fuga eveniet doloremque in voluptatum, rerum aperiam recusandae.`,
  },
  {
    id: 2,
    title: "Article Title 2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit magni aut,
          ut perspiciatis consectetur non ratione. Modi porro quam officia, debitis, fuga eveniet doloremque in voluptatum, rerum aperiam recusandae.`,
  },
  {
    id: 3,
    title: "Article Title 3",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit magni aut,
          ut perspiciatis consectetur non ratione. Modi porro quam officia, debitis, fuga eveniet doloremque in voluptatum, rerum aperiam recusandae.`,
  },
];

export default {
  getArticles() {
    return articles;
  },
  getArticle(id) {
    return articles[id];
  },
};
