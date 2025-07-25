
const books = [

  { title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', genre: 'Fantasy' },

  { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },

  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Drama' },

  { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' }

]

const genreFantsy = () => {
    const filteredBooks = books.filter((book) => book.genre === "Fantasy")
    return filteredBooks
}

console.log(genreFantsy(books))

const movies = [

  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  { title: "Tripple Frontier", year: 2023, rating: 9.0, genre: "Action" },
  { title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure" }

]

const filterMovies = movies.filter((movie) => movie.year > 2010 && movie.rating > 8.0 && (movie.genre === "Action" || movie.genre === "Adventure"))

console.log(filterMovies)

const restaurants = [

  { name: "Pasta Paradise", stars: 4.5, cuisine: "Italian", openOnSundays: false },
  { name: "Sushi Sensation", stars: 3.8, cuisine: "Japanese", openOnSundays: true },
  { name: "Burger Binge", stars: 4.2, cuisine: "American", openOnSundays: true },
  { name: "Nasi", stars: 4.5, cuisine: "Italian", openOnSundays: true }

]

const filterRestaurant = restaurants.filter((res) => res.stars > 4 && res.cuisine === "Italian" && res.openOnSundays);

console.log(filterRestaurant)

const products = [

  { name: 'Bread', price: 480, quantity: 3 },
  { name: 'Clips', price: 200, quantity: 5 },
  { name: 'green Bread Knife', price: 3077, quantity: 1 },
  { name: 'Slipper', price: 150, quantity: 2 }

]

const filterProduct = (product) => {
    const filteredProduct =  product.filter((product) => product.name.includes("Bread"))
    const names = filteredProduct.map((product) => product.name)
    return names
}

console.log(filterProduct(products))

const employees = [

  { name: "David", salary: 60000 },
  { name: "Emma", salary: 75000 },
  { name: "Alex", salary: 90000 },
  { name: "Sophie", salary: 55000 }

]

const totalSalaries = employees.reduce((acc, curr) => {
     acc = acc + curr.salary
     return acc
}, 0)

const averageSalaries = employees.map((employee) => ({...employee, aboveAverage: employee.salary >= totalSalaries / employees.length ? true : false }))
console.log(averageSalaries)

const community = [

  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }

]

const mostActive = community.reduce((acc, curr) => {
    const first = acc.hours.reduce((acc, curr) => acc + curr,0)
    const second = curr.hours.reduce((acc, curr) => acc + curr, 0)

   first < second ? (acc = curr) : acc
   return acc
}, community[0])

console.log(mostActive)



const communityData = [

  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },
  { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] }

]

const mostTimeSpend = communityData.map((data) => {
    const person = data.hours.reduce((acc, curr) => acc + curr, 0)
       data.role === "student" && person > 20 ? (data.tag = "regular") : data
       return data
       
})

console.log(mostTimeSpend)