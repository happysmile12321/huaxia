import { render } from 'amis'
interface SketchPadProps {
  title: string
  number: string
}
const SketchPad: React.FC<SketchPadProps> = ({ number, title }) => {
  return render({
    type: 'page',
    gridClassName: 'bg-green-300',
    style: {
      fontFamily: '',
      fontSize: 12,
      textAlign: 'center',
      backgroundImage: 'linear-gradient(90deg, #58B9FF, #4B9EFF)'
    },
    body: [
      {
        type: 'tpl',
        tpl: title,
        inline: true,
        wrapperComponent: 'p',
        style: {
          fontFamily: '',
          fontSize: 14,
          textAlign: 'center',
          color: '#fff'
        }
      },
      {
        type: 'tpl',
        tpl: number,
        inline: true,
        wrapperComponent: 'p',
        style: {
          fontFamily: '',
          fontSize: 22,
          textAlign: 'center',
          color: '#fff'
        }
      }
    ],
    asideResizor: false,
    pullRefresh: {
      disabled: true
    }
  })
}
export default SketchPad
