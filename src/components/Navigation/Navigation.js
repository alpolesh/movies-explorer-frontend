import { useRouteMatch } from 'react-router-dom';
import NavigationMain from './NavigationMain';
import NavigationOthers from './NavigationOthers';

function Navigation() {
  const isMain = useRouteMatch({path: "/"});
  return (
    isMain.isExact 
    ?
    <NavigationMain /> 
    :
    <NavigationOthers />
  )
}

export default Navigation;