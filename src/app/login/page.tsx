'use client';

import { CopyrightOutlined } from '@ant-design/icons';
import { Layout, Row, Space, Tabs, Typography } from 'antd';

import Basic from '@/app/login/basic';

import styles from './styles.module.css';

export default function Page() {
  return (
    <>
      <Layout.Content className={styles.content}>
        <Row style={{ minHeight: '85%' }} justify="center" align="middle">
          <div style={{ minWidth: '360px' }}>
            <Typography.Title level={2}>欢迎使用</Typography.Title>
            <Tabs items={[{ key: 'basic', label: '账号', children: <Basic /> }]}></Tabs>
          </div>
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ background: '#fff', textAlign: 'center' }}>
        <Space direction="vertical">
          <Typography.Text>BSD-3-Clause License</Typography.Text>
          <Typography.Text>
            Copyright <CopyrightOutlined /> 2024. Open Source Connector by Kain.
          </Typography.Text>
        </Space>
      </Layout.Footer>
    </>
  );
}
