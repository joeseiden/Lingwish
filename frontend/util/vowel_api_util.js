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

export const fetchAllVowels = (chartable=false) => (
  $.ajax({
    url: `api/vowels`,
    chartable
  })
);
