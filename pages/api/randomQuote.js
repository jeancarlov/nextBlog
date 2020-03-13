// export default (req, res) => {
//     res.status(200).json({
//       quote: 'Write tests, not too many, mostly integration',
//       author: 'Guillermo Rauch'
//     });
//   };

// Multiple quotes 
import quotes from '../../quotes.json';

export default (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(quote);
};