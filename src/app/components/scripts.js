var blogData = require('./data.json');

function blogInfo (dataSet) {
  let result = dataSet[0].title;
  console.log(result);
  return result;
}

blogData.forEach(blogInfo);
