import React from 'react'
import {GridColumn, Grid} from 'semantic-ui-react'
import SettingsNav from '../settingsNav'

const SettingsDasboard = () => {
  return (
    <div>
    <Grid>
    <GridColumn width={12}>
 <h1>Settings </h1>
    </GridColumn>
    <GridColumn width={4}>
    <SettingsNav/>

    </GridColumn>
    </Grid>

    </div>
  )
}

export default SettingsDasboard
