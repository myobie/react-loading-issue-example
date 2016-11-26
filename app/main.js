import Auth0Lock from 'auth0-lock'

const lock = Auth0Lock('abc', 'xyz')

lock.on('authenticated', result => {
  console.dir(result)
  lock.getProfile(result.idToken, (err, profile) => {
    if (err) {
      console.error(err)
      return
    }
    console.dir(profile)
  })
})

lock.show()
