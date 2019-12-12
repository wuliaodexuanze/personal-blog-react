import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('../../containers/Login'),
  loading() {
    return null
  }
});