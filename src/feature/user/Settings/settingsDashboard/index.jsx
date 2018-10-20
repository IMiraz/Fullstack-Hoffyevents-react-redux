import React from 'react'
import {connect} from 'react-redux'
import {GridColumn, Grid} from 'semantic-ui-react'
import {Switch, Route, Redirect} from 'react-router-dom'
import SettingsNav from '../settingsNav'
import AccountPage from '../accountPage'
import PhotoPage from '../photoPage'
import AboutPage from '../aboutPage'
import BasicPage from '../basicPage'
import {updatePassword} from '../../../auth/authActionsCreator'

const actions = {
   updatePassword,
}

const SettingsDasboard = ({ updatePassword}) => {
  return (
    <div>
    <Grid>
    <GridColumn width={12}>
    <Switch>
    <Redirect exact from='/settings' to='/settings/basics'/>

      <Route path='/settings/basics' component={BasicPage}/>
      <Route path='/settings/about' component={AboutPage}/>
      <Route path='/settings/photos' component={PhotoPage}/>
      <Route path='/settings/account' render ={() => <AccountPage updatePassword={updatePassword}/> }/>
    </Switch>
    </GridColumn>
    <GridColumn width={4}>
    <SettingsNav/>

    </GridColumn>
    </Grid>

    </div>
  )
}

export default connect(null, actions)(SettingsDasboard)
