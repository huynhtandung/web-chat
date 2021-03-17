import {
  InfoCircleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN, REGISTER } from "@common";
import {
  notificationError,
  notificationSuccess,
} from "@components/notification";
import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { withRouter } from "react-router";
import "./style.less";

const { Text } = Typography;

const Login = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  const [register] = useMutation(REGISTER);
  const [login] = useMutation(LOGIN);

  const hanldeSubmitForm = () => {
    setLoading(true);
    form.validateFields().then((values) => {
      const { username, password, fullName, rememberMe } = values;
      if (isLogin) {
        login({
          variables: {
            input: {
              username,
              password,
            },
          },
        }).then(({ errors, data }) => {
          setLoading(false);
          if (errors) {
            notificationError(errors["message"]);
          }

          if (data.login) {
            notificationSuccess("Login successfully!");
            form.resetFields();
            const { accessToken } = data.login;
            if (rememberMe) {
              localStorage.setItem("app-access-token", accessToken);
            } else {
              sessionStorage.setItem("app-access-token", accessToken);
            }
            history.push("/");
          }
        });
      } else {
        register({
          variables: {
            input: {
              username,
              password,
              fullName,
            },
          },
        }).then(({ errors, data }) => {
          setLoading(false);
          if (errors) {
            notificationError(errors["message"]);
          }

          if (data.register) {
            notificationSuccess("Register successfully!");
            form.resetFields();
            setIsLogin(true);
          }
        });
      }
    });
  };

  return (
    <div className="login">
      <div className="login-form">
        <Text className="login-form-header">
          {isLogin ? "Glassy Login Form" : "Glassy Register Form"}
        </Text>
        <div className="login-form-content">
          <Text className="login-form-content-title">
            Fill out the form below to {isLogin ? "Login" : "Register"}
          </Text>
          <Form form={form} onFinish={hanldeSubmitForm}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input username!",
                },
                {
                  min: 6,
                  message: "Min length is 6!",
                },
              ]}
            >
              <Input
                placeholder="Username"
                addonAfter={<UserOutlined />}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input password!",
                },
                {
                  min: 6,
                  message: "Min length is 6!",
                },
              ]}
            >
              <Input
                placeholder="Password"
                type="password"
                addonAfter={<LockOutlined />}
              />
            </Form.Item>
            {isLogin && (
              <Form.Item>
                <Row justify="end">
                  <Col span={12} className="login-form-remember-me">
                    <Form.Item name="rememberMe" valuePropName="checked">
                      <Checkbox checked>Remember Me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} className="login-form-forgot-password">
                    <Text className="login-form-content-forgot-password">
                      Forgot Password?
                    </Text>
                  </Col>
                </Row>
              </Form.Item>
            )}
            {!isLogin && (
              <>
                <Form.Item
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input confirm password!",
                    },
                    {
                      min: 6,
                      message: "Min length is 6!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                  dependencies={["password"]}
                >
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    addonAfter={<LockOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Please input full name!",
                    },
                    {
                      min: 6,
                      message: "Min length is 6!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Fullname"
                    addonAfter={<InfoCircleOutlined />}
                    autoComplete="off"
                  />
                </Form.Item>
              </>
            )}
            <Form.Item className="login-form-submit">
              <Button htmlType="submit" block loading={loading}>
                {isLogin ? "Login" : "Register"}
              </Button>
            </Form.Item>
          </Form>
          <Text className="login-form-register">
            {isLogin
              ? "Dont't have an account? Free register"
              : "Already have an account? Free login"}{" "}
            <span
              className="login-form-register-link"
              onClick={() => {
                setIsLogin(!isLogin);
                form.resetFields();
              }}
            >
              here
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
