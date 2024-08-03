export const fetchUsers = (page = 1, limit = 10) => {
    const url = `https://dummyjson.com/users?&limit=${limit}&skip=${page * limit}&select=firstName,maidenName,lastName,age,gender,phone,address`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return {
                users: data.users,
                total: data.total,
            };
        });
};
