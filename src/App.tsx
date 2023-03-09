import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';

import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';

import axios from 'axios';
import copy from 'copy-to-clipboard';

import {render, ToastComponent, AlertComponent} from 'amis';
import {alert, confirm, toast} from 'amis-ui';
import AMIS from './huaxia/pages/AMIS';

class APP extends React.Component<any, any> {
  render() {
    return (
      <>
        <ToastComponent key="toast" position={'top-right'} />
        <AlertComponent key="alert" />
        <AMIS />
      </>
    );
  }
}

export default APP;
