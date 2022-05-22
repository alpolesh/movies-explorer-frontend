import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NavigationMain from './NavigationMain';
import NavigationOthers from './NavigationOthers';

function Navigation() {
  const {isLoggedIn} = useContext(CurrentUserContext);
  return (
    isLoggedIn 
    ?
    <NavigationOthers />
    :
    <NavigationMain /> 
  )
}

export default Navigation;