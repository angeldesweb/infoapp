import { gql } from '@apollo/client'

const SINGLE_UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      id
      url
    }
  }
`;

export {
    SINGLE_UPLOAD
}