'use client';

import { Button, Space } from 'antd';

import { makeHash, makeToken } from './actions';

export default function Index() {
  return (
    <Space>
      <Button
        onClick={async () => {
          const hash = await makeHash();
          console.log(hash);
        }}
      >
        Make Argon2
      </Button>
      <Button
        onClick={async () => {
          const token = await makeToken();
          console.log(token);
        }}
      >
        Make Token
      </Button>
    </Space>
  );
}
