export const fetchSingleConlang = id => (
  $.ajax({
    url: `api/conlangs/${id}`
  })
);

export const fetchAllConlangs = () => (
  $.ajax({
    url: 'api/conlangs'
  })
);
