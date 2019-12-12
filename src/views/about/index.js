import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('../../components/About'),
  loading() {
    return null
  }
});