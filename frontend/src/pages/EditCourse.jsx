import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCourse = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    startDate: "",
    endDate: "",
    level: "",
    content: [],
  });

  // Fetch existing course
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:3000/admin/course/${courseId}`, {
          credentials: "include",
        });
        const data = await res.json();

        setCourse(data);

        setForm({
          title: data.title || "",
          description: data.description || "",
          instructor: data.instructor || "",
          duration: data.duration || "",
          startDate: data.startDate ? String(data.startDate).slice(0, 10) : "",
          endDate: data.endDate ? String(data.endDate).slice(0, 10) : "",
          level: data.level || "",
          content: Array.isArray(data.content)
            ? data.content.map((it) => ({
                type: it.type || "text",
                value: it.value || "",
                file: null, // hold new file if selected
              }))
            : [],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching course:", error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  // Basic input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ------- Content editor -------
  const addContentItem = () => {
    setForm((prev) => ({
      ...prev,
      content: [...prev.content, { type: "text", value: "", file: null }],
    }));
  };

  const removeContentItem = (index) => {
    setForm((prev) => {
      const next = [...prev.content];
      next.splice(index, 1);
      return { ...prev, content: next };
    });
  };

  const handleContentTypeChange = (index, newType) => {
    setForm((prev) => {
      const next = [...prev.content];
      next[index] = { type: newType, value: "", file: null };
      return { ...prev, content: next };
    });
  };

  const handleContentValueChange = (index, newValue) => {
    setForm((prev) => {
      const next = [...prev.content];
      next[index] = { ...next[index], value: newValue };
      return { ...prev, content: next };
    });
  };

  const handleFileChange = (index, file) => {
    setForm((prev) => {
      const next = [...prev.content];
      next[index] = { ...next[index], file, value: "" }; // reset value, keep file
      return { ...prev, content: next };
    });
  };

  const moveContentItem = (index, direction) => {
    setForm((prev) => {
      const next = [...prev.content];
      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= next.length) return prev;
      const [moved] = next.splice(index, 1);
      next.splice(newIndex, 0, moved);
      return { ...prev, content: next };
    });
  };

  // Submit with FormData
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const fd = new FormData();

      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("instructor", form.instructor);
      fd.append("duration", form.duration);
      fd.append("startDate", form.startDate);
      fd.append("endDate", form.endDate);
      fd.append("level", form.level);

      const contentBlocks = form.content.map((block, index) => {
        if (block.type === "video-upload" && block.file) {
          fd.append(`file_${index}`, block.file);
          return { type: "video-upload", value: `file_${index}` };
        }
        return { type: block.type, value: block.value };
      });

      fd.append("content", JSON.stringify(contentBlocks));

      const res = await fetch(`http://localhost:3000/admin/edit/${courseId}`, {
        method: "PUT",
        body: fd,
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Course updated successfully!");
        navigate(`/admin/allCourses`);
      } else {
        alert(data?.message || "Failed to update course");
      }
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Error updating course");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-8">
      {/* Read-only snapshot */}
      <div className="p-6 bg-gray-50 border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Course Details</h2>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <p><span className="font-semibold">Title:</span> {course?.title}</p>
          <p><span className="font-semibold">Instructor:</span> {course?.instructor}</p>
          <p><span className="font-semibold">Duration:</span> {course?.duration}</p>
          <p><span className="font-semibold">Level:</span> {course?.level}</p>
          <p><span className="font-semibold">Start Date:</span> {String(course?.startDate).slice(0,10)}</p>
          <p><span className="font-semibold">End Date:</span> {String(course?.endDate).slice(0,10)}</p>
        </div>
        <p className="mt-2"><span className="font-semibold">Description:</span> {course?.description}</p>
      </div>

      {/* Edit Form */}
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Course</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Instructor</label>
              <input
                type="text"
                name="instructor"
                value={form.instructor}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Duration</label>
              <input
                type="text"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Level</label>
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 border rounded min-h-[100px]"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Content</h3>
              <button
                type="button"
                onClick={addContentItem}
                className="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
              >
                + Add Item
              </button>
            </div>

            {form.content?.length ? (
              <div className="space-y-4">
                {form.content.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <label className="text-sm text-gray-600">Type</label>
                      <select
                        className="p-2 border rounded"
                        value={item.type}
                        onChange={(e) => handleContentTypeChange(index, e.target.value)}
                      >
                        <option value="text">Text</option>
                        <option value="video-link">Video Link</option>
                        <option value="video-upload">Video Upload</option>
                      </select>

                      <div className="ml-auto flex gap-2">
                        <button type="button" onClick={() => moveContentItem(index, -1)} className="px-2 py-1 border rounded">↑</button>
                        <button type="button" onClick={() => moveContentItem(index, 1)} className="px-2 py-1 border rounded">↓</button>
                        <button type="button" onClick={() => removeContentItem(index)} className="px-2 py-1 border rounded bg-red-50 text-red-700">Remove</button>
                      </div>
                    </div>

                    {item.type === "text" && (
                      <textarea
                        className="w-full p-2 border rounded"
                        value={item.value}
                        onChange={(e) => handleContentValueChange(index, e.target.value)}
                      />
                    )}

                    {item.type === "video-link" && (
                      <input
                        type="url"
                        className="w-full p-2 border rounded"
                        value={item.value}
                        onChange={(e) => handleContentValueChange(index, e.target.value)}
                      />
                    )}

                    {item.type === "video-upload" && (
                      <div className="space-y-2">
                        {item.value && !item.file && (
                          <video
                            controls
                            className="w-full rounded border"
                            src={`http://localhost:3000/${item.value}`}
                          />
                        )}
                        <input
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleFileChange(index, e.target.files[0])}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No content yet. Add items.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={saving}
            className={`px-4 py-2 rounded text-white ${saving ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
