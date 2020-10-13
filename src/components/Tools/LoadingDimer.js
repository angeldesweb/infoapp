import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoadingDimmer = ({component}) => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader>Cargando Resultados</Loader>
      </Dimmer>

      { component }
    </Segment>
  </div>
)

export default LoadingDimmer
