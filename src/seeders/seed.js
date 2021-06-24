const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const bookSeed = [
    {
        title: "The Mindfulness Solution",
        authors: ["Ronald D. Siegel"],
        description: "Offers advice for achieving happiness and dealing with life's obstacles through mindfulness, with strategies for cultivating this state of mind and setting up a formal daily practice routine.",
        image: "http://books.google.com/books/content?id=ovX0tCUp6cEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=ovX0tCUp6cEC&dq=mindfulness&hl=&source=gbs_api"
    },
    {
        title: "Mindfulness",
        authors: ["Mark Williams", "Danny Penman"],
        description: "The life-changing international bestseller reveals a set of simple yet powerful mindfulness practices that you can incorporate into daily life to help break the cycle of anxiety, stress, unhappiness, and exhaustion. Mindfulness promotes the kind of happiness and peace that gets into your bones. It seeps into everything you do and helps you meet the worst that life throws at you with new courage. Based on Mindfulness-Based Cognitive Therapy (MBCT), the book revolves around a straightforward form of mindfulness meditation which takes just a few minutes a day for the full benefits to be revealed. MBCT has been clinically proven to be at least as effective as drugs for depression and is widely recommended by US physicians and the UK's National Institute for Health and Clinical Excellence—in other words, it works. More importantly it also works for people who are not depressed but who are struggling to keep up with the constant demands of the modern world. MBCT was developed by the book's author, Oxford professor Mark Williams, and his colleagues at the Universities of Cambridge and Toronto. By investing just 10 to 20 minutes each day, you can learn the simple mindfulness meditations at the heart of MBCT and fully reap their benefits. The book includes links to audio meditations to help guide you through the process. You'll be surprised by how quickly these techniques will have you enjoying life again.",
        image: "http://books.google.com/books/content?id=fReoFW9tLxAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=fReoFW9tLxAC&source=gbs_api"
    },
    {
        title: "What is Mindfulness?",
        authors: ["Tamara Russell"],
        description: "Due to the recent widespread media coverage on the far-reaching health benefits of mindfulness, misconceptions about the practice have become common as it has moved from spiritual to secular realms. So what is the reality? And how can this one thing have such a dramatic impact on so many people, in so many areas of their lives? This book aims to demystify the confusions that often get in the way of mindfulness training, and help readers get to grip with it in a way they can put to optimal use in their daily lives. After an insightful introduction about why the subject of mindfulness is so worth exploring, each chapter then addresses a key question: What does mindfulness really mean and what are its benefits? Where does it come from and how has it developed through the years? How can I get the most from it? What are the key tools to develop it? And finally, what are the future possibilities for society as a whole with mindfulness? As such, this book brings readers on an exploratory journey through the fascinating world of mindfulness, giving us a deeper understanding of what it means to live mindfully, revealing the depth of its capacity to enhance our everyday lives, and in turn helping us lead more connected, aware and contented lives.",
        image: "http://books.google.com/books/content?id=h1ksDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=h1ksDwAAQBAJ&source=gbs_api"
    },
    {
        title: "Mindfulness for Beginners",
        authors: ["Jon Kabat-Zinn"],
        description: "None",
        image: "http://books.google.com/books/content?id=Ogk7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=Ogk7DwAAQBAJ&dq=mindfulness&hl=&source=gbs_api"
    },
    {
        title: "Beginning Mindfulness",
        authors: ["Andrew Weiss"],
        description: "The author makes Eastern meditation practices accessible, sharing his insights into mindfulness, purity, and grief, showing readers how to become mindful by following his simple steps. Original.",
        image: "http://books.google.com/books/content?id=BYZ6AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=BYZ6AAAAQBAJ&dq=mindfulness&hl=&source=gbs_api"
    }
];

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });