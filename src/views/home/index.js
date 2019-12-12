import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('../../containers/Home'),
  loading() {
    return null
  }
});