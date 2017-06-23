// phonology must look like this: {phonology: {consonant_inventory: [], vowel_inventory: []}}
export const updatePhonology = (userId, conlangId, id, phonology) => (
  $.ajax({
    type: "PATCH",
    url: `api/users/${userId}/conlangs/${conlangId}/phonologies/${id}`,
    phonology
  })
);
