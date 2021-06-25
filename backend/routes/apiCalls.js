async function getBooks() {
    let res;
    try {
      res = await fetch("/api/books");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    console.log('json');
    console.log(json);
    return json;
}

export default getBooks;