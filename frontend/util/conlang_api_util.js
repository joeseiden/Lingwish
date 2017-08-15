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

export const updateConlang = (userId, conlang) => (
  $.ajax({
    type: 'PATCH',
    url:`api/users/${userId}/conlangs/${conlang.id}`,
    data: {conlang}
  })
)
