import React, { useState } from "react";
import {
  Input,
  Space,
  Table,
  Tag,
  Button,
  Modal,
  Form,
  Input as AntdInput,
  Select,
  Anchor,
} from "antd";

const { Search } = Input;
const { Option } = Select;
const { Link } = Anchor;

const Users = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [activeSection, setActiveSection] = useState("part-1");
  const [editingUser, setEditingUser] = useState(null);
  const [data, setData] = useState([
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      email: "john.brown@example.com",
      status: "Admin",
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      email: "jim.green@example.com",
      status: "User",
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      email: "joe.black@example.com",
      status: "User",
    },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  // Open Modal for Adding or Editing
  const showModal = (user) => {
    if (user) {
      // Edit User
      setEditingUser(user);
      form.setFieldsValue(user);
    } else {
      // Add New User
      setEditingUser(null);
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  // Handle Modal OK (Add/Edit User)
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingUser) {
          // Edit logic
          const updatedData = data.map((user) =>
            user.key === editingUser.key ? { ...user, ...values } : user
          );
          setData(updatedData);
          setFilteredData(updatedData);
        } else {
          // Add new user
          const newUser = {
            key: data.length + 1,
            ...values,
          };
          const newData = [...data, newUser];
          setData(newData);
          setFilteredData(newData);
        }
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  // Handle Modal Cancel
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle Delete User
  const handleDelete = (key) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        const newData = data.filter((user) => user.key !== key);
        setData(newData);
        setFilteredData(newData);
      },
    });
  };

  // Handle Search Functionality
  const handleSearch = (value) => {
    const searchData = data.filter((user) =>
      Object.values(user)
        .join(" ")
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setFilteredData(searchData);
  };

  // Handle Anchor Change
  const handleAnchorChange = (activeKey) => {
    setActiveSection(activeKey);
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
        let color = status === "Admin" ? "blue" : "green";
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
          <a
            style={{ color: "blue" }}
            onClick={() => showModal(record)} // Edit logic
          >
            Edit
          </a>
          <a
            style={{ color: "red" }}
            onClick={() => handleDelete(record.key)} // Delete logic
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div className=" flex flex-col">
      <div className="flex flex-col px-5 bg-white mt-1 mx-1 mb-[1px]">
        <div className="flex flex-row items-center font-poppins mt-3 gap-[2px]">
          <div className="text-[#00000073]">Home</div>
          <img src="../../public/assests/separator.svg" alt="" />
          <div>Users</div>
        </div>
        <h1 className="text-2xl font-normal mt-2 font-poppins">Users</h1>

        {/* Search Bar */}
        <div className="w-full flex justify-center items-center ">
          <Search
            placeholder="Search by name or email"
            allowClear
            size="large"
            onChange={(e) => handleSearch(e.target.value)} // Live search
            className="w-[60%]"
          />
        </div>
        {/* Anchor Navigation */}
        <Anchor
          direction="horizontal"
          onClick={(e, { href }) => {
            handleAnchorChange(href.slice(1)); // Remove '#' from href
          }}
        >
          <Link href="#part-1" title="Users" />
          <Link href="#part-2" title="Roles" />
        </Anchor>
      </div>

      {/* Conditional rendering based on Anchor */}
      {activeSection === "part-1" && (
        <div id="part-1" className="bg-white p-3 mx-6">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6">
            <div>User Table</div>
            <div>
              <Space>
                <Button type="default" className="rounded-sm">
                  View Log
                </Button>
                <Button
                  type="primary"
                  onClick={() => showModal(null)} // Add New User
                  className="rounded-sm"
                >
                  Add New{" "}
                </Button>
              </Space>
            </div>
          </div>

          {/* User Table */}
          <Table
            columns={columns}
            dataSource={filteredData}
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

      {/* Modal for Adding New User */}
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
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <AntdInput placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="status"
            label="Role"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select placeholder="Select a role">
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;
