import React, { useState, useEffect } from "react";
import { Input, Space, Table, Tag, Button, Modal, Form, Input as AntdInput, Select, Anchor } from "antd";
import useUsersStore from "../store/useUsersStore";
import useAuthStore from "../store/useAuthStore";
import useRoleStore from "../store/useRoleStore";

const { Search } = Input;
const { Option } = Select;
const { Link } = Anchor;

const roleIdMapping = {
  Admin: '671420c2df2d71de25efde15',
  Moderator: '6713a61ec74280ead1f879b3',
  User: '6713a626c74280ead1f879b4'
};

const Users = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRoleModalVisible, setIsRoleModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [roleForm] = Form.useForm();
  const [activeSection, setActiveSection] = useState("part-1");
  const [editingUser, setEditingUser] = useState(null);
  const [editingRole, setEditingRole] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [roles, setRoles] = useState(Object.keys(roleIdMapping));

  const { users, fetchUsers, modifyUser, deleteUser } = useUsersStore();
  const { signup } = useAuthStore();
  const { fetchAllRoles, createRole, role } = useRoleStore();

  useEffect(() => {
    fetchUsers();
    fetchAllRoles();
  }, [fetchUsers, fetchAllRoles]);

  useEffect(() => {
    setFilteredData(users);
  }, [users]);

  const showUserModal = (user) => {
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
      const { first_name, last_name, email, password, status } = values;
      const role_id = roleIdMapping[status];
  
      const requestData = {
        first_name,
        last_name,
        email,
        password,
        role_id,
      };
  
      if (editingUser && editingUser._id) {
        await modifyUser(editingUser._id, requestData);
        setFilteredData((prevUsers) =>
          prevUsers.map((user) => 
            user._id === editingUser._id ? { ...user, ...requestData } : user
          )
        );
      } else {
        await signup(first_name, last_name, email, password, role_id);
        fetchUsers();
      }
  
      setIsModalVisible(false);
    } catch (error) {
      console.error("Validation Failed:", error.response?.data || error.message);
    }
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
    setIsRoleModalVisible(false);
    roleForm.resetFields();
  };

  const handleDeleteUser = (userId) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        await deleteUser(userId);
        setFilteredData((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      },
    });
  };

  const handleDeleteRole = (role) => {
    console.log(`Deleting role: ${role}`);
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

  const handleAddRole = async () => {
    try {
      const values = await roleForm.validateFields();
      const newRoleName = values.role_name;

      setRoles((prevRoles) => [...prevRoles, newRoleName]);
      await createRole(newRoleName); // Call createRole from useRoleStore

      setIsRoleModalVisible(false);
      roleForm.resetFields();
    } catch (error) {
      console.error("Validation Failed:", error.response?.data || error.message);
    }
  };

  const handleEditRole = (role) => {
    setEditingRole(role);
    roleForm.setFieldsValue({ role_name: role });
    setIsRoleModalVisible(true);
  };

  const handleUpdateRole = async () => {
    try {
      const values = await roleForm.validateFields();
      const updatedRoleName = values.role_name;

      setRoles((prevRoles) =>
        prevRoles.map((role) => (role === editingRole ? updatedRoleName : role))
      );

      setIsRoleModalVisible(false);
      roleForm.resetFields();
    } catch (error) {
      console.error("Validation Failed:", error.response?.data || error.message);
    }
  };

  const userColumns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => {
        const role = Object.keys(roleIdMapping).find(key => roleIdMapping[key] === record.role_id);
        const color = role === "Admin" ? "blue" : role === "Moderator" ? "orange" : "green";
        return (
          <Tag color={color}>
            {role ? role.toUpperCase() : 'N/A'} 
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a style={{ color: "blue" }} onClick={() => showUserModal(record)}>Edit</a>
          <a style={{ color: "red" }} onClick={() => handleDeleteUser(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];

  const roleColumns = [
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEditRole(record.name)} type="link">Edit</Button>
          <Button onClick={() => handleDeleteRole(record.name)} type="link" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const roleData = roles.map(role => ({
    key: role,
    name: role
  }));

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
          onClick={(e, { href }) => setActiveSection(href.slice(1))}
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
              <Button type="primary" onClick={() => showUserModal(null)} className="rounded-sm">Add New</Button>
            </Space>
          </div>
          <Table columns={userColumns} dataSource={filteredData} />
        </div>
      )}
      {activeSection === "part-2" && (
        <div id="part-2" className="bg-white p-3 mx-6">
          <div className="flex justify-between items-center mb-6">
            <div>Role Table</div>
            <Button type="primary" onClick={() => setIsRoleModalVisible(true)} className="rounded-sm">Add New Role</Button>
          </div>
          <Table columns={roleColumns} dataSource={roleData} />
        </div>
      )}

      <Modal
        title={`${editingUser ? "Edit" : "Add New"} User`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
            <AntdInput />
          </Form.Item>
          <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
            <AntdInput />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <AntdInput />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: !editingUser }]}>
            <AntdInput.Password />
          </Form.Item>
          <Form.Item name="status" label="Role" rules={[{ required: true }]}>
            <Select placeholder="Select a role">
              {roles.map((role) => (
                <Option key={role} value={role}>
                  {role}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={`${editingRole ? "Edit" : "Add New"} Role`}
        visible={isRoleModalVisible}
        onOk={editingRole ? handleUpdateRole : handleAddRole}
        onCancel={handleCancel}
      >
        <Form form={roleForm} layout="vertical">
          <Form.Item name="role_name" label="Role Name" rules={[{ required: true }]}>
            <AntdInput />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;
