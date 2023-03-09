import {render} from 'amis';

const Breadcrumb: React.FC = () => {
  return render({
    type: 'breadcrumb',
    items: [
      {
        label: '首页',
        href: 'https://baidu.gitee.com/',
        icon: 'fa fa-home'
      },
      {
        label: '上级页面'
      },
      {
        label: '当前页面'
      }
    ]
  });
};
export default Breadcrumb;
