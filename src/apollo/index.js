import { ApolloClient , InMemoryCache} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const link = createUploadLink({
  uri:`${process.env.REACT_APP_API_URL}/graphql`,
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        'x-token': token ? `Bearer ${token}` : null
      }
    })
  }
})
const client = new ApolloClient({
  link:link,
  cache:new InMemoryCache()
})
  

export default client;



