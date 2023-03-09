import {render} from 'amis';
export interface HintTextProps {
  inline: boolean;
  tpl: string;
}
const HintText: React.FC<HintTextProps> = ({inline = false, tpl = ''}) => {
  return render({
    type: 'tpl',
    tpl,
    inline,
    style: {
      fontSize: 13,
      color: '#5F6370',
      textAlign: 'right'
    }
  });
};
export default HintText;
