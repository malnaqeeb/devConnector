import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from '../layout/Alert';

import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PraivateRoute from '../routing/PraivateRoute';
const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />

        <PraivateRoute exact path='/dashboard' component={Dashboard} />
        <PraivateRoute exact path='/create-profile' component={CreateProfile} />
        <PraivateRoute exact path='/edit-profile' component={EditProfile} />
        <PraivateRoute exact path='/add-experience' component={AddExperience} />
        <PraivateRoute exact path='/add-education' component={AddEducation} />
        <PraivateRoute exact path='/posts' component={Posts} />
        <PraivateRoute exact path='/posts/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;