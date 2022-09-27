const booksByCategory = [
{
    category: "Riqueza",
    books: [
        {
            title: "Os segredos da mente milionária",
            author: "T. Harv Eker",
        },
        {
            title: "O homem mais rico da Babilônia",
            author: "George S. Clason",
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
        },
    ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
    

function totalCategories() {
   console.log(`Existem ${booksByCategory.length} categorias`)
   for(let category of booksByCategory){
       console.log(`A categoria ${category.category} tem ${category.books.length} livros`)
    }
}

function searchAuthorBooks(author){
    let authors = []; 
    
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                authors.push(book.title);
            }
        }
    }
    console.log(authors)
}

totalCategories()
searchAuthorBooks('Augusto Cury')