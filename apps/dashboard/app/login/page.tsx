"use client";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { App, Button, Form, Input, Layout, Row, Typography } from "antd";
import { useRouter } from "next/navigation";

import { login } from "./actions";
import styles from "./styles.module.css";

const { Content } = Layout;

export default function Page() {
  const router = useRouter();
  const { message } = App.useApp();

  return (
    <>
      <Content className={styles.content}>
        <Row style={{ minHeight: "80%" }} justify="center" align="middle">
          <div style={{ minWidth: "300px" }}>
            <Typography.Title level={2} style={{ paddingBottom: "0.5rem" }}>
              欢迎使用
            </Typography.Title>
            <Form
              name="basic"
              layout="vertical"
              autoComplete="off"
              onFinish={async (data) => {
                if (!(await login(data))) {
                  message.error({ content: "登录失败，用户名或密码不正确！" });
                  return;
                }
                message.success({ content: "登录成功，正在加载数据~" });
                router.push("/admin");
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "电子邮件不能为空" },
                  { type: "email", message: "电子邮件格式不正确" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder={"电子邮件"}
                  type={"email"}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "密码不能为空" }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder={"密码"}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" block={true} htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Row>
      </Content>
    </>
  );
}
