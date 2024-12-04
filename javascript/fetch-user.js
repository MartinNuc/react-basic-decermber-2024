function fetchUser(userId) {
  return new Promise((resolve, reject) => {

    const responseTime = Math.random() * 2000 + 1000;
    setTimeout(() => {
      if (userId < 0) {
        reject('User not found');
      } else {
        const user = {
          id: userId,
          name: 'John Doe',
          email: 'john.doe@example.com'
        };
    
        resolve(user)
      }
    }, responseTime)
  });
}

console.log('fetching')
fetchUser(42)
  .then(user => console.log(user))
  .catch(error => console.error(error))