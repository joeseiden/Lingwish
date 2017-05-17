export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`
  })
);

export const editAccount = user => (
  $.ajax({
    type: 'PATCH',
    url: `api/users/${user.id}`
  })
);

export const deleteAccount = user => (
  $.ajax({
    type: 'DELETE',
    url: `api/users/${user.id}`
  })
);
