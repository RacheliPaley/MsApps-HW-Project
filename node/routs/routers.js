
const { getAllData }  = require('../Service/dataModel')

async function getData(req, res) {
  try {
    // Get the current page number and category from the query parameters
    const { page, category } = req.query;
    const currentPage = parseInt(page) || 1;
    const elementsPerPage = 9;

    // Calculate the start and end indices for the elements to return
    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;

    // Call filterCategoryByTag to get the filtered data and array length
    const { filteredArray, ArrayLength } = await filterCategoryByTag(category);

    // Get the elements to return based on the start and end indices
    const result = filteredArray?.slice(startIndex, endIndex);

    // Check if both result and ArrayLength are defined
    if (result && ArrayLength) {
      // Send the result and array length as JSON response
      res.json({
        result,
        ArrayLength
      });
    } else {
      // Handle the case when result or ArrayLength is undefined
      res.status(500).send('Error occurred while fetching data.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while fetching data.');
  }
}
async function getCategories(req, res) {
  try {
    const data = await getAllData();
    const tags = data.reduce((allTags, obj) => {
      const objTags = obj.tags.split(', ');
      return allTags.concat(objTags);
    }, []);

    const uniqueTags = [...new Set(tags)];
    res.json(uniqueTags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving tags.' });
  }
}
async function filterCategoryByTag(category) {
  try {
    // Call getAllData function to get the data array
    const dataArray = await getAllData();

    // Filter the data array to find objects with the specified category
    const filteredArray = dataArray.filter(obj => obj.tags.includes(category));

    // Return the filtered array along with the array length
    return {
      filteredArray,
      ArrayLength: filteredArray.length
    };
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while filtering data by category.');
  }
}
async function getDataById(req, res) {
  try {
    const { id } = req.params;

    // Get the data using the getData function
    const data = await getAllData();

    // Find the object with the matching ID
    const object = data.find((item) => item.id === parseInt(id));

    // If the object is found, send it as a JSON response
    if (object) {
      res.json(object);
    } else {
      res.status(404).send('Object not found.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data.');
  }
}

module.exports = { getCategories, getData, filterCategoryByTag, getDataById };
