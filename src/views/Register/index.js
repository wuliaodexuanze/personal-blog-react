import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('../../containers/Register'),
  loading() {
    return null
  }
});