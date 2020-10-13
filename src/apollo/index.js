import { ApolloClient , InMemoryCache} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

let base_url = process.env.REACT_APP_API_URL

const link = createUploadLink({
  uri:`${base_url}/graphql`,
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



