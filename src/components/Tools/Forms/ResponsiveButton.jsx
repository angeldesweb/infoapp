import React , { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

export default ({btnName,loading})=>{
    return (
        <Fragment>
            <Button  loading={loading} fluid type='submit' primary>{btnName}</Button>
        </Fragment>
    )
}

