import React from 'react';
import { Layout } from 'antd';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import AppSider from './AppSider';

function AppLayout() {
    return(
      <Layout >
          <AppSider />
        <Layout>
            <AppHeader />
            <AppContent />
        </Layout>
    </Layout>
    )
}

export default AppLayout

