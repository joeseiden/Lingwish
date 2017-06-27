export const updatePhonology = (userId, conlangId, id, phonology) => (
  $.ajax({
    type: "PATCH",
    url: `api/users/${userId}/conlangs/${conlangId}/phonologies/${id}`,
    phonology
  })
);
