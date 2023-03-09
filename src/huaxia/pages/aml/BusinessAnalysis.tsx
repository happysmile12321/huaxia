import { render } from 'amis'
import Text from '../../components/aml/Text'
import Breadcrumb from '../../components/aml/Breadcrumb'
import HintText from '../../components/aml/HintText'
import SketchPad from '../../components/aml/SketchPad'
import Grid2D from 'amis/lib/renderers/Grid2D'
import Container from 'amis/lib/renderers/Container'
const BusinessAnalysis: React.FC = () => {
  return render({
    type: 'page',
    title: '经营分析1',
    asideResizor: false,
    pullRefresh: {
      disabled: true
    },
    style: {
      fontFamily: 'Times New Roman',
      fontSize: 16,
      backgroundColor: '#F3F4F7'
    },
    body: (
      <>
        <Breadcrumb />
        <HintText
          inline={false}
          tpl='<p>注：统计期间均为&ldquo;T-1&rdquo;日，单位：交易规模（万元）、交易笔数（万笔）</p>'
        />
      </>
    )
  })
}
export default BusinessAnalysis
