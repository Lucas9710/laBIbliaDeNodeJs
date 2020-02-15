//Un callback (llamada de vuelta)
// es una función que recibe como argumento otra función y la ejecuta. 

const booksDb =[
    {
        id: 1,
        title: 'clean code'
    
    },
    {
        id: 2,
        title: 'the pragmantic programmer'
    },
    {
        id:3,
        title: 'web Development with node js'
    }
];

// la funcion recibe un id de algunos de los libros y un callback
function getBookById(id, callback){
    //usamos la funcion find para buscar el libro por id, la funcion flecha va a recibir un argumento que es un libro
    const book = booksDb.find((book) => book.id === id);
    //si no existe ese libro ejecuto mi callback
    if(!book){
        const error = new Error();
        error.message = "Book not found!";
        callback(error);
    }

   callback(null, book); 
}

//llamo la funcion y le paso como parametro el numero del id del libro que busco 
//también le paso un callback que tiene como parametro un error y un book
getBookById(1, (err, book) => {
    //si existe un error voy a retornar el mensaje de error, si no, retorna el libro.
    if(err){
        return console.log(err.message);
    }

    return console.log(book);
})
