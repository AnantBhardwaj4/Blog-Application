import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {

  renderTitleField(field){
    const className=`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return (
 <div className={className}>
 <label>Title:</label>
 <input
 className="form-control"
 type="text"
 {...field.input}
 />
 <div className="text-help">
 {field.meta.touched ? field.meta.error: ''}
 </div>
 </div>


    );
  }

renderTagsField(field) {
    const className=`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
  return (
  <div className={className}>
  <label>Categories</label>
  <input
  className="form-control"
  type="text"
  {...field.input}
  />
  <div className="text-help">
  {field.meta.touched ? field.meta.error: ''}
  </div>
  </div>


);

}

renderContentField(field) {
    const className=`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
  return (
  <div className={className}>
  <label>Content:</label>
  <input
  className="form-control"
  type="text"
  {...field.input}
  />
  <div className="text-help">
  {field.meta.touched ? field.meta.error: ''}
</div>
  </div>

);

}
onSubmit(values) {

  this.props.createPost(values, () => {
      this.props.history.push('/');
  });
}


render() {
const {handleSubmit}=this.props;

return (
<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
<Field
 name="title"
 component={this.renderTitleField}
 />
 <Field
  name="categories"
  component={this.renderTagsField}
  />
  <Field
   name="content"
   component={this.renderContentField}
   />
   <button type="submit" className="btn btn-primary">Post</button>
   <Link to="/" className="btn btn-danger">Cancel</Link>
</form>

);

}





}
function validate(values) {
const errors={};
if(!values.title) {
  errors.title="Enter a Title";
}
if(!values.categories) {
  errors.categories="Enter a valid category";
}
if(!values.content) {
  errors.content="Enter some Content";
}
return errors;

}


export  default reduxForm({
  validate: validate,
  form:'PostsNewForm'
})(
  connect(null,{createPost})(PostsNew)
);
