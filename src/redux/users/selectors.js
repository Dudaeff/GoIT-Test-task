const selectUsers = state => state.users.items;

const selectUsersIsLoading = state => state.users.isLoading;

const selectUsersError = state => state.users.error;

export { selectUsers, selectUsersIsLoading, selectUsersError };
