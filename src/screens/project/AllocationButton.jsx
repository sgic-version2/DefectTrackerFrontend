import React from 'react'
import { Button } from 'semantic-ui-react'

const AllocationButton = () => {
    return (
        <div>
            <Button  color="primary">Roll Allocation</Button>
            <Button color="red">Deallocation</Button>
            <Button primary>Module Allocation</Button>
        </div>
    )
}

export default AllocationButton
