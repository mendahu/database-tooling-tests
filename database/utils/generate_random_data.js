const randomString = () => {
  return Math.random().toString(36).substring(2, 15);
};

const generateRandomData = (options) => {
  const authorIds = [];
  const authorNames = [];
  const authorUrls = [];

  const bookTitles = [];
  const bookDescriptions = [];
  const bookAuthorIds = [];
  const bookUrls = [];

  for (let i = 0; i < options.qty; i++) {
    const author_id = i + 1 + options.offset;

    const author = {
      id: author_id,
      name: randomString(),
      url: `https://www.${randomString()}.com`,
    };

    authorIds.push(author.id);
    authorNames.push(author.name);
    authorUrls.push(author.url);

    const bookCount = Math.ceil(Math.random() * 5);

    for (let j = 0; j < bookCount; j++) {
      const book = {
        title: randomString(),
        description: randomString(),
        author_id,
        url: `https://www.${randomString()}.com`,
      };

      bookTitles.push(book.title);
      bookDescriptions.push(book.description);
      bookAuthorIds.push(book.author_id);
      bookUrls.push(book.url);
    }
  }

  return {
    authors: { ids: authorIds, names: authorNames, urls: authorUrls },
    books: {
      titles: bookTitles,
      descriptions: bookDescriptions,
      author_ids: bookAuthorIds,
      urls: bookUrls,
    },
  };
};

module.exports = generateRandomData;
