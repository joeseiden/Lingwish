export const updatePhonology = (userId, conlangId, id, phonology) => {
  return ($.ajax({
    type: "PATCH",
    url: `api/users/${userId}/conlangs/${conlangId}/phonologies/${id}`,
    data: {phonology}
  }));
};
