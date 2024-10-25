import React, { useState, useEffect } from "react";
import { Input, Space, Table, Tag, Button, Modal, Form, Input as AntdInput, Select, Anchor } from "antd";
import useUserStore from "../store/useUsersStore";
import useAuthStore from "../store/useAuthStore"; 

const { Search } = Input;
const { Option } = Select;
const { Link } = Anchor;

const Users = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [activeSection, setActiveSection] = useState("part-1");
  const [editingUser, setEditingUser] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const { users, fetchUsers } = useUserStore();
  const { signup } = useAuthStore(); 

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const showModal = (user) => {
    if (user) {
      setEditingUser(user);
      form.setFieldsValue(user);
    } else {
      setEditingUser(null);
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const { firstName, lastName, email, password, status } = values;
      const roleIdMapping = {
        Admin: '671420c2df2d71de25efde15',
        Moderator: '6713a61ec74280ead1f879b3',
        User: '6713a626c74280ead1f879b4'
      };

      const roleId = roleIdMapping[status]; 

      if (editingUser) {
        // Logic for editing the user (if required)
      } else {
        // Call the signup function with the mapped role ID
        await signup(firstName, lastName, email, password, roleId);
      }

      setIsModalVisible(false);
    } catch (info) {
      console.log("Validation Failed:", info);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        setFilteredData((prevUsers) => prevUsers.filter((user) => user.key !== key));
      },
    });
  };

  const handleSearch = (value) => {
    const searchData = users.filter((user) =>
      Object.values(user)
        .join(" ")
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setFilteredData(searchData);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color = status === "Admin" ? "blue" : status === "Moderator" ? "orange" : "green";
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a style={{ color: "blue" }} onClick={() => showModal(record)}>
            Edit
          </a>
          <a style={{ color: "red" }} onClick={() => handleDelete(record.key)}>
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-5 bg-white mt-1 mx-1 mb-[1px]">
        <div className="flex flex-row items-center font-poppins mt-3 gap-[2px]">
          <div className="text-[#00000073]">Home</div>
          <img src="../../public/assets/separator.svg" alt="" />
          <div>Users</div>
        </div>
        <h1 className="text-2xl font-normal mt-2 font-poppins">Users</h1>

        <div className="w-full flex justify-center items-center">
          <Search
            placeholder="Search by name or email"
            allowClear
            size="large"
            onChange={(e) => handleSearch(e.target.value)}
            className="w-[60%]"
          />
        </div>
        <Anchor
          direction="horizontal"
          onClick={(e, { href }) => {
            setActiveSection(href.slice(1));
          }}
        >
          <Link href="#part-1" title="Users" />
          <Link href="#part-2" title="Roles" />
        </Anchor>
      </div>

      {activeSection === "part-1" && (
        <div id="part-1" className="bg-white p-3 mx-6">
          <div className="flex justify-between items-center mb-6">
            <div>User Table</div>
            <Space>
              <Button type="default" className="rounded-sm">View Log</Button>
              <Button type="primary" onClick={() => showModal(null)} className="rounded-sm">Add New</Button>
            </Space>
          </div>

          <Table
            columns={columns}
            dataSource={filteredData.length ? filteredData : users}
            className="rounded-sm border"
          />
        </div>
      )}

      {activeSection === "part-2" && (
        <div id="part-2">
          <h1 className="text-2xl font-bold">Roles</h1>
          <p>This is the Roles section where you can manage roles.</p>
        </div>
      )}

      <Modal
        title={editingUser ? "Edit User" : "Add New User"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingUser ? "Save" : "Add"}
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item>
            <Input.Group compact>
              <Form.Item
                name="firstName"
                noStyle
                rules={[{ required: true, message: "First name is required" }]}
              >
                <AntdInput style={{ width: "50%" }} placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                noStyle
                rules={[{ required: true, message: "Last name is required" }]}
              >
                <AntdInput style={{ width: "50%" }} placeholder="Last Name" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, message: "Email is required" }]}>
            <AntdInput placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Password is required" }]}>
            <AntdInput.Password placeholder="Password" />
          </Form.Item>
          <Form.Item name="status" label="Select Role" rules={[{ required: true, message: "Please select a role!" }]}>
            <Select placeholder="Select a role" allowClear>
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
              <Option value="Moderator">Moderator</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;
