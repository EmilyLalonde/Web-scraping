var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://shop.nordstrom.com/c/womens-dresses-shop?origin=topnav&breadcrumb=Home%2fWomen%2fClothing%2fDresses')
  .wait('._5lXiG _1sMDh _2PDR1')
  .evaluate(function () {
    var dressNameNodes = document.querySelectorAll('._5lXiG _1sMDh _2PDR1');
    var list = [].slice.call(dressNameNodes);
    return list.map(function (node) {
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
