export const fetchAllWords = () => (
  $.ajax({
    url: `api/words`
  })
);

export const fetchSingleWord = id => (
  $.ajax({
    url: `api/words/${id}`
  })
);

export const fetchConlangWords = conlangId => (
  $.ajax({
    url: `api/conlangs/${conlangId}/words`
  })
);

export const createWord = (userId, conlangId, word) => (
  $.ajax({
    type: "POST",
    url: `api/users/${userId}/conlangs/${conlangId}/words`,
    word
  })
);

export const updateWord = (userId, conlangId, id, word) => (
  $.ajax({
    type: "PATCH",
    url: `api/users/${userId}/conlangs/${conlangId}/words`,
    word
  })
);

export const deleteWord = (userId, conlangId, id) => (
  $.ajax({
    type: "DELETE",
    url: `api/users/${userId}/conlangs/${conlangId}/words/${id}`
  })
)
