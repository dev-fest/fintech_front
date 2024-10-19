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
  Upload,
  DatePicker,
  message,
} from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import Papa from "papaparse";
import { saveAs } from 'file-saver';

const handleExport = () => {
  const exportData = filteredData.map(({ key, ...rest }) => rest); // Remove `key` field
  const headers = Object.keys(exportData[0]);
  const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  // Convert JSON to CSV
  const csvRows = [];
  csvRows.push(headers.join(',')); // Add header row

  exportData.forEach((row) => {
    const values = headers.map((header) => row[header]);
    csvRows.push(values.join(','));
  });

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'projects.csv');
  message.success('Projects exported successfully!');
};
const { RangePicker } = DatePicker;
const handleCSVUpload = (file) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      const uploadedData = results.data;
      // Assume each row in the CSV contains a project with the relevant fields
      const newProjects = uploadedData.map((row, index) => ({
        key: `${data.length + index + 1}`, // Add unique key
        projectName: row["projectName"],
        startDate: row["startDate"],
        endDate: row["endDate"],
        expenses: parseFloat(row["expenses"]),
        budget: parseFloat(row["budget"]),
        category: row["category"],
      }));
      setFilteredData([...filteredData, ...newProjects]); // Add new projects to existing data
      message.success("CSV file uploaded successfully!");
    },
    error: function () {
      message.error("Failed to upload CSV file!");
    },
  });
};

const csvProps = {
  beforeUpload: (file) => {
    handleCSVUpload(file);
    return false; // Prevent automatic upload
  },
};
const { Option } = Select;

const Projects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample project data
  const data = [
    {
      key: "1",
      projectName: "Project Alpha",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      expenses: 50000,
      budget: 100000,
      category: "Development",
    },
    {
      key: "2",
      projectName: "Project Beta",
      startDate: "2023-03-01",
      endDate: "2023-09-30",
      expenses: 30000,
      budget: 75000,
      category: "Marketing",
    },
  ];

  const [filteredData, setFilteredData] = useState(data); // Initialize state with data

  // Table columns
  const columns = [
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Expenses",
      dataIndex: "expenses",
      key: "expenses",
      render: (expenses) => `\$${expenses.toLocaleString()}`,
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
      render: (budget) => `\$${budget.toLocaleString()}`,
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      render: (category) => (
        <Tag color={category === "Development" ? "blue" : "green"}>
          {category.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a style={{ color: "blue" }}>Edit</a>
          <a style={{ color: "red" }}>Delete</a>
        </Space>
      ),
    },
  ];

  // Open Modal for adding a new project
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle Modal OK for adding a new project
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("New Project Data:", values);
        setIsModalVisible(false);
        form.resetFields(); // Reset form after submission
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  // Handle Modal Cancel
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  // Handle search and category filtering
  const onSearch = (value) => {
    setSearchQuery(value);
    filterData(value, categoryFilter);
  };

  const onCategoryChange = (value) => {
    setCategoryFilter(value);
    filterData(searchQuery, value);
  };

  const filterData = (search, category) => {
    const filtered = data.filter(
      (item) =>
        item.projectName.toLowerCase().includes(search.toLowerCase()) &&
        (!category || item.category === category)
    );
    setFilteredData(filtered);
  };
 
  return (
    <div className="">
      <div className="bg-white px-4 pb-2">
        <div className="flex flex-row items-center font-poppins mt-3 gap-[2px]">
          <div className="text-[#00000073]">Home</div>
          <img src="../../public/assests/separator.svg" alt="" />
          <div>Projects</div>
        </div>
        <h1 className="text-2xl font-normal mt-2 font-poppins">Projects</h1>
      </div>

      <div className="mx-6">
        <div className="bg-white my-3">
          {/* Search Bar and Category Filter */}
          <div className="w-full flex justify-center items-center mb-4 p-3">
            <RangePicker className="rounded-sm mr-4 w-max" />

            <div className="font-poppins  text-nowrap mr-2">Project name</div>
            <Input
              placeholder="Search by project name"
              allowClear
              enterButton="Search"
              size="medium"
              onSearch={onSearch} // Search by project name
              className="rounded-sm mx-2"
            />
          </div>
        </div>

        <div className="p-3 bg-white">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6">
            <div>Project Table</div>
            <div>
              <Space>
                <Button
                  icon={<UploadOutlined className="text-[#2150B7]" />}
                  className="bg-[#E5EBF9] border-[#2150B7] rounded-sm border text-[#2150B7] px-4"
                >
                  <Upload {...csvProps}>Add CSV</Upload>
                </Button>
                <Button
                  icon={<ExportOutlined />}
                  onClick={handleExport}
                  className="bg-[#D9F0FF] border border-[#58A8F7] rounded-sm px-4"
                >
                  Export
                </Button>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={showModal}
                  className="px-4 rounded-sm"
                >
                  Add New
                </Button>
              </Space>
            </div>
          </div>

          {/* Project Table */}
          <Table
            columns={columns}
            dataSource={filteredData}
            className="rounded-sm border"
          />
        </div>
      </div>
      {/* Modal for Adding New Project */}
      <Modal
        title="Add New Project"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="projectName"
            label="Project Name"
            rules={[{ required: true, message: "Project name is required" }]}
          >
            <AntdInput placeholder="Project Name" />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: "Start date is required" }]}
          >
            <AntdInput type="date" />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true, message: "End date is required" }]}
          >
            <AntdInput type="date" />
          </Form.Item>
          <Form.Item
            name="expenses"
            label="Expenses"
            rules={[{ required: true, message: "Expenses are required" }]}
          >
            <AntdInput type="number" placeholder="Expenses" />
          </Form.Item>
          <Form.Item
            name="budget"
            label="Budget"
            rules={[{ required: true, message: "Budget is required" }]}
          >
            <AntdInput type="number" placeholder="Budget" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Category is required" }]}
          >
            <Select placeholder="Select a category">
              <Option value="Development">Development</Option>
              <Option value="Marketing">Marketing</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Projects;
