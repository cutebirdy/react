import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message ,Row} from 'antd'
import { useState } from 'react';
const FormItem = Form.Item;
// const Option = Select.Option;
const RadioGroup = Radio.Group;
const initialValues = {
  userName: '',
  startDate: null,
  endDate: null,
  content: '',
  people: 'lucy',
  checkboxItems: ['checkboxItem1'],
  radioItem: 'b',
};
function MyForm() {

  const [form] = Form.useForm();
  const [modal, setModal] = useState(false)
  const formItemLayout = {
    labelCol: { span: 6},
    wrapperCol: { span: 5}
  }
  // const horizontalLayout = {
  //   labelCol: { span: 6},   // 标签宽度为 4
  //   wrapperCol: { span: 18 }, // 输入框宽度为 20
  // }
  
  function handleselectChange(value) {
    console.log(`selected ${value}`)
  }
  function handleShowmodal() {
    setModal(true)
  }
  function handleHidemodal() {
    setModal(false)
  }
  function handleSubmit(e) {
    form.validateFields()
      .then(values => {
        console.log('收到表单值：', values);
        form.resetFields();
        
    message.success('操作成功!')
  
      })
      .catch(errorInfo => {
        console.log('表单验证失败：', errorInfo);
      });
  }
  return (
    <Form
    // {...formItemLayout}
      layout="horizontal" onFinish={handleSubmit} form={form} initialValues={initialValues}
    >
      <FormItem
        id='control-input'
        label='输入框'
        name='userName'
        {...formItemLayout}
        rules={[{ required: true, message: 'Please input your username!' }]}

      >
        <Input id="control-input" />
      </FormItem>
      <FormItem
        label='日期选择框'
        labelCol={{ span: 3 }}
        rules={{ required: true }}
        {...formItemLayout}
      >
        <Row gutter={16}>
          <Col span='11'>
          <FormItem
            name='startDate'>
            <DatePicker />
          </FormItem>
        </Col>
        <Col span='2'>
          <p className="ant-form-split">--</p>
        </Col>
        <Col span='11'>
          <FormItem
            name='endDate'
          >
            <DatePicker />
          </FormItem>
        </Col>
        </Row>
      </FormItem>
      <FormItem
        id='control-textarea'
        label='文本域'
        name='content'
        {...formItemLayout}
      >
        <Input.TextArea id="control-textarea" rows={3} />
      </FormItem>
      <FormItem
        id='select'
        label='Select 选择器'
        {...formItemLayout}
        name='people'
      >
        <Select defaultValue="lucy" size="large" style={{ width: 200 }} onChange={handleselectChange}>
          <Select.Option value="jack">birdy</Select.Option>
          <Select.Option value="lucy">美女</Select.Option>
          <Select.Option value="disabled" disabled>disabled</Select.Option>
          <Select.Option value="yiminghe">yiminghe</Select.Option>
        </Select>
      </FormItem>
      <FormItem
        id='Checkbox'
        label='Checkbox 多选框'
        {...formItemLayout}
        name='checkboxItems'
      >
        <Checkbox.Group>
          <Checkbox className="ant-checkbox-inline" value='checkboxItem1'>选项一</Checkbox>
          <Checkbox className="ant-checkbox-inline" value='checkboxItem2'>选项二</Checkbox>
          <Checkbox className="ant-checkbox-inline" value='checkboxItem3'>选项三</Checkbox>
        </Checkbox.Group>


      </FormItem>
      <FormItem
        label='Radio 单选框'
        {...formItemLayout}
        name='radioItem'
      >
        <RadioGroup defaultValue="b">
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
          <Radio value="c">C</Radio>
          <Radio value="d">D</Radio>
        </RadioGroup>

      </FormItem>
      <FormItem
        wrapperCol={{ span: 8, offset: 6 }}
        style={{ marginTop: 24 }}
        // {...formItemLayout}
      >
        <Button type="primary" htmlType="submit" >确定</Button>
        &nbsp;&nbsp;&nbsp;
        <Button type="ghost" onClick={handleShowmodal}>弹出modal框</Button>

      </FormItem>
      <Modal title="问题提示" open={modal} onOk={handleShowmodal} onCancel={handleHidemodal}>
        您确定要删除这条消息吗？
      </Modal>

    </Form>


  );
}
export default MyForm;