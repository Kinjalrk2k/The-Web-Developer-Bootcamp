var movies = [
  { title: "Titanic", hasWatched: true, rating: 3.5 },
  { title: "Fifty Shades of Grey", hasWatched: false, rating: 3.5 },
  { title: "Fifty Shades Darker", hasWatched: true, rating: 3.5 },
  { title: "Fifty Shades Freed", hasWatched: false, rating: 3.5 },
  { title: "Before We Go", hasWatched: true, rating: 3.5 },
  { title: "Blue Jay", hasWatched: true, rating: 3.5 },
  { title: "Eight Grade", hasWatched: false, rating: 3.5 },
  { title: "Love, Rosie", hasWatched: true, rating: 3.5 },
  { title: "Never Let Me Go", hasWatched: true, rating: 3.5 },
  { title: "The Art of Getting By", hasWatched: true, rating: 3.5 },
  { title: "The Edge of Seventeen", hasWatched: true, rating: 3.5 },
  { title: "P.S. I Love You", hasWatched: true, rating: 3.5 },
  { title: "Flipped", hasWatched: false, rating: 3.5 },
  { title: "La La Land", hasWatched: true, rating: 3.5 },
  { title: "To All the Boys I've Loved Before", hasWatched: true, rating: 3.5 },
  {
    title: "To All the Boys: P.S. I Still Love You",
    hasWatched: true,
    rating: 3.5,
  },
  { title: "Extract", hasWatched: false, rating: 3.5 },
  { title: "500 Shades of Summer", hasWatched: false, rating: 3.5 },
  { title: "When We First Met", hasWatched: true, rating: 3.5 },
  { title: "The Perfect Date", hasWatched: true, rating: 3.5 },
  { title: "The Perks of being a Wallflower", hasWatched: false, rating: 3.5 },
  { title: "Tumbaad", hasWatched: true, rating: 3.5 },
  { title: "Stree", hasWatched: false, rating: 3.5 },
  { title: "Pari", hasWatched: true, rating: 3.5 },
  { title: "The Boy", hasWatched: false, rating: 3.5 },
  { title: "Orphan", hasWatched: true, rating: 3.5 },
  { title: "Perfume", hasWatched: true, rating: 3.5 },
  { title: "Inconceivable", hasWatched: true, rating: 3.5 },
  { title: "Pet Sematary", hasWatched: true, rating: 3.5 },
  { title: "Bird Box", hasWatched: true, rating: 3.5 },
  { title: "The Roommate", hasWatched: false, rating: 3.5 },
  { title: "The Autopsy of Jane Doe", hasWatched: true, rating: 3.5 },
];

movies.forEach(function (movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '" - ' + movie.rating + " stars";
  console.log(result);
});
