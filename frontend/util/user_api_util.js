export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`
  })
);

export const editAccount = user => (
  $.ajax({
    type: 'PATCH',
    url: `api/users/${user.id}`,
    user
  })
);

export const deleteAccount = userId => (
  $.ajax({
    type: 'DELETE',
    url: `api/users/${userId}`
  })
);
