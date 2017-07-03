export const fetchVowel = id => (
  $.ajax({
    url: `api/vowels/${id}`
  })
);

export const fetchVowelIntentory = inventory => (
  $.ajax({
    url: `api/vowels`,
    inventory
  })
);

export const fetchAllVowels = () => (
  $.ajax({
    url: `api/vowels`,
  })
);

export const fetchChartableVowels = () => (
  $.ajax({
    url: `api/vowels?chartable=true`
  })
);
