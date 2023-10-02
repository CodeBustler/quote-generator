let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const api_url = 'https://api.quotable.io/random';

async function newQuote(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  quote.innerHTML = data.content;
  author.innerHTML = '-- ' + data.author;
}

newQuote(api_url);
function tweet() {
  window.open(
    'https://twitter.com/intent/tweet?text=' +
      quote.innerHTML +
      ' ' +
      author.innerHTML,
    '_blank',
    'width=500, height=350'
  );
}
