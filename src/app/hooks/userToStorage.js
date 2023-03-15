export const userToStorage = () => {
  const handleAddUserToStorage = (user) => {
    Object.keys(user).forEach((key) => {
      if (user[key]) {
        localStorage.setItem(key, user[key]);
      }
    });
  };

  return { handleAddUserToStorage };
};
