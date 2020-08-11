import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const Login = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Finish:", values);
    props.onAuth(values.username, values.password);
    props.history.push(`/profile/${props.username}`);
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
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
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
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
