fetch('https://openlibrary.org/search.json?q=javascript')
.then(res => res.json())
.then(data =>  BookLoad(data.docs))



const searchBook = () =>{
     
     const searchText =document.getElementById("search-field").value;
     BookLoad(searchText)
     document.getElementById("search-field").value='';
     
}


const loadBook = (searchText) =>{
     const url = `https://openlibrary.org/search.json?q=javascript=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data.console.log(data))
     
    
     
}




const BookLoad = (books) =>{
          const bookContainer = document.getElementById("book-container")
          bookContainer.textContent='';
     for(const book of books){
             const bookBox = document.createElement("div")
             bookBox.classList.add("col-md-3");
              const imgUrl ="https://covers.openlibrary.org/b/id/554106-M.jpg"
              bookBox.innerHTML=`
                        <div class="shadow rounded p-10 m-5 ">
                               <img src= ${imgUrl}>
                               <h3>${book. title}</h1>
                               <h4>${book.author_name}></h2>
                               <p>${book.publisher}</p>
                               <p>${book.publish_date}
                              
                            
                           
                           
                        </div> 
              
              
              `;
              
          bookContainer.appendChild(bookBox)
     } 
     
     
     
     
     
     console.log(books)
}


