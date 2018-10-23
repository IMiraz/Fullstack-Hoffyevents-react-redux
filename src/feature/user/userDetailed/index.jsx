import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import  UserdetailedHeader from './userDetailedHeader'
import UserDetailedDescription from './userDetailedDescription'

class UserDetailedPage extends Component {

    render() {

        return (
            <Grid>
              <UserdetailedHeader/>
              <UserDetailedDescription/>
            </Grid>

        );
    }
}

export default UserDetailedPage;