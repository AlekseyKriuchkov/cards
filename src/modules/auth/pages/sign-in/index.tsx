import { useAppDispatch } from "@/app/hooks"
import { authThunk } from "@/modules/auth/auth.slice"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Form, Input, Button, Checkbox } from "antd"
import { LoginType } from "@/modules/auth/api/types"

export const SignIn = () => {
  const dispatch = useAppDispatch()

  const onFinish = (values: LoginType) => {
    dispatch(authThunk.login(values))
  }

  return (
    <StyledCard title={"Sign In"}>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item name="email">
          <Input placeholder={"Email"} />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password placeholder={"Password"} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size={"large"} block={true}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  )
}
