import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('../../components/NotFound'),
  loading() {
    return null
  }
});