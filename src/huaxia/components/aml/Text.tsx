import {render} from 'amis';

const Text: React.FC = () => {
  return render({
    type: 'tpl',
    tpl: 'abc'
  });
};
export default Text;
