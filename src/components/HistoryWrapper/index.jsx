import { useHistory } from 'react-router';

const HistoryWrapper = ({ children }) => {
  const history = useHistory();

  history.listen(() => {
    window.scrollTo({ top: 0, left: 0 });
  });

  return children;
};

export default HistoryWrapper;
