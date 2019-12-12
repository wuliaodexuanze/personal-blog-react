import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('../../containers/Article'),
  loading() {
    return null
  }
});