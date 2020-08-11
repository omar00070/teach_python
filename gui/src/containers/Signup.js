import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { Form, Input, Button } from "antd";

const Signup = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(
      "Received values of form: ",
      values.username,
      values.email,
      values.password,
      values.confirm
    );
    props.onAuth(
      values.username,
      values.email,
      values.password,
      values.confirm
    );
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "80.5vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignUp(username, email, password1, password2)),
  };
};

export default connect(null, mapDispatchToprops)(Signup);
