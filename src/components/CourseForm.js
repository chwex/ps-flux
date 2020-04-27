import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
      />
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            name="authorId"
            id="author"
            className="form-control"
            onChange={props.onChange}
            value={props.course.authorId || ""}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        label="category"
        onChange={props.onChange}
        name="category"
        value={props.course.category}
      />

      <input className="btn btn-primary" type="submit" value="Save" />
    </form>
  );
}

export default CourseForm;
