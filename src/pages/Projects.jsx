import React, { useEffect, useState } from "react";
import {
  Input,
  Space,
  Table,
  Button,
  Modal,
  Form,
  Upload,
  Input as AntdInput,
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
import useProjectStore from "../store/useProjectStore";

const Projects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { projects, fetchProjects, isLoading, deleteProject, updateProject } = useProjectStore();

  // State to hold filtered projects based on search
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleDelete = (projectId) => {
    deleteProject(projectId);
  };

  const handleUpdate = async (projectId, updatedData) => {
    try {
      await updateProject(projectId, updatedData); // Assuming this is an async operation
      message.success('Project updated successfully!');
      fetchProjects(); // Refetch the projects after the update
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error('Failed to update project!');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  // Function to filter projects based on search input
  const filterProjects = (query) => {
    const filtered = projects.filter(project =>
      project.project_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    filterProjects(value); // Call the filtering function with the current value
  };

  const handleExport = () => {
    const exportData = projects.map(({ _id, ...rest }) => rest); 
    const headers = Object.keys(exportData[0]);

    const csvRows = [];
    csvRows.push(headers.join(',')); 

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
        const newProjects = uploadedData.map((row, index) => ({
          key: `${projects.length + index + 1}`,
          project_name: row["projectName"],
          start_date: row["startDate"],
          end_date: row["endDate"],
          // Add other properties as needed
        }));
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
      return false; 
    },
  };
  
  const columns = [
    {
      title: "Project Name",
      dataIndex: "project_name",
      key: "project_name",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a 
            style={{ color: "blue" }} 
            onClick={() => {
              form.setFieldsValue({
                project_name: record.project_name,
                start_date: record.start_date,
                end_date: record.end_date,
              });
              setEditingProjectId(record._id);
              setIsModalVisible(true);
            }}
          >
            Edit
          </a>
          <a 
            style={{ color: "red" }} 
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingProjectId) {
          handleUpdate(editingProjectId, values); // Call the updated handleUpdate function
        } else {
          console.log("New Project Data:", values);
          setIsModalVisible(false);
          form.resetFields(); 
        }
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingProjectId(null);
  };

  return (
    <div className="">
      <div className="bg-white px-4 pb-2">
        <h1 className="text-2xl font-normal mt-2 font-poppins">Projects</h1>
      </div>

      <div className="mx-6">
        <div className="bg-white my-3">
          <div className="w-full flex justify-center items-center mb-4 p-3">
            <RangePicker className="rounded-sm mr-4 w-max" />
            <div className="font-poppins text-nowrap mr-2">Project name</div>
            <Input
              placeholder="Search by project name"
              allowClear
              size="medium"
              value={searchQuery} // Set the input value to the searchQuery state
              onChange={handleSearchChange} // Call the filtering function on input change
              className="rounded-sm mx-2"
            />
          </div>
        </div>

        <div className="p-3 bg-white">
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
                  onClick={() => {
                    setEditingProjectId(null); // Reset editingProjectId for new project
                    showModal();
                  }}
                  className="px-4 rounded-sm"
                >
                  Add New
                </Button>
              </Space>
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={filteredProjects} // Use filtered projects for the table
            loading={isLoading}
            rowKey="_id" 
            className="rounded-sm border"
          />
        </div>
      </div>

      <Modal
        title={editingProjectId ? "Edit Project" : "Add New Project"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingProjectId ? "Update" : "Add"}
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="project_name"
            label="Project Name"
            rules={[{ required: true, message: "Project name is required" }]}
          >
            <AntdInput placeholder="Project Name" />
          </Form.Item>
          <Form.Item
            name="start_date"
            label="Start Date"
            rules={[{ required: true, message: "Start date is required" }]}
          >
            <AntdInput placeholder="Start Date" />
          </Form.Item>
          <Form.Item
            name="end_date"
            label="End Date"
            rules={[{ required: true, message: "End date is required" }]}
          >
            <AntdInput placeholder="End Date" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Projects;

