import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NavigationMain from './NavigationMain';
import NavigationOthers from './NavigationOthers';

function Navigation() {
  const {isLoggedIn} = useContext(CurrentUserContext);
  const isMain = useRouteMatch({path: "/"});
  return (
    isLoggedIn 
    ?
    <NavigationOthers />
    :
    <NavigationMain /> 
  )
}

export default Navigation;