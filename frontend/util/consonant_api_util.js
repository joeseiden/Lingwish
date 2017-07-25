export const fetchConsonant = id => (
  $.ajax({
    url: `api/consonants/${id}`
  })
);

// inventory must be an array of integers
export const fetchConsonantInventory = inventory => (
  $.ajax({
    url: `api/consonants`,
    inventory
  })
);

export const fetchAllConsonants = () => (
  $.ajax({
    url: `api/consonants`
  })
);

export const fetchChartableConsonants = () => (
  $.ajax({
    url: `api/consonants?chartable=true`
  })
);
