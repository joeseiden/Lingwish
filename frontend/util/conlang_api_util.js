export const fetchSingleConlang = id => (
  $.ajax({
    url: `api/conlangs/${id}`
  })
);

export const fetchConlangIndex = () => (
  $.ajax({
    url: 'api/conlangs'
  })
);
