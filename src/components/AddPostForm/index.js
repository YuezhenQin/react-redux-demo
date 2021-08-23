import React, {useState} from 'react';
import './style.css'

/** hooks 版本 */
/*在函数件内部通过hook api做状态管理的逻辑*/

function AddPostForm(props){
  /*state: title, content*/
  /*设置初始值*/
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //替换
  // const [{title, constant}, setState] = useState({
  //   title: ''
  //   content: ''
  // })
  

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)

    } else if (e.target.name === 'content') {
      setContent(e.target.value)
    }
  };

  const handleSave = async () => {
    if (title.length > 0 && content.length > 0) {
      console.log(title, content)
    }
  };

  return (
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="title">Post Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleChange}
          />
          <button type="button" className="button" onClick={handleSave}>
            Save Post
          </button>
        </form>
      </section>
    );
};


/** 受控组件 */
// class AddPostForm extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       title: '',
//       content: ''
//     }
//   }


//   handleChange = (e) => {
//     if (e.target.name === 'title') {
//       this.setState({
//         title: e.target.value
//       })

//     } else if (e.target.name === 'content') {
//       this.setState({
//         content: e.target.value
//       })
//     }
//   };

//   handleSave = async () => {
//     const {title, content} = this.state;
//     if (title.length > 0 && content.length > 0) {
//       console.log(title, content)
//     }
//   };

//   render() {
//     const {title, content} = this.props;
//     return (
//       <section>
//         <h2>Add a New Post</h2>
//         <form>
//           <label htmlFor="title">Post Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={title}
//             onChange={this.handleChange}
//           />
//           <label htmlFor="content">Content:</label>
//           <textarea
//             id="content"
//             name="content"
//             value={content}
//             onChange={this.handleChange}
//           />
//           <button type="button" className="button" onClick={this.handleSave}>
//             Save Post
//           </button>
//         </form>
//       </section>
//     );
//   }
// };


/** 非受控组件 */
// class AddPostForm extends React.Component{

//   constructor(props){
//     super(props);
//     this.titleInput = React.createRef();
//     this.contentInput = React.createRef();
//   }

//   handleSave = async () => {
//     const title = this.titleInput.current.value;
//     const content = this.contentInput.current.value;
//     if (title.length > 0 && content.length > 0) {
//       console.log(title, content)
//     }
//   };

//   render() {
//     return (
//       <section>
//         <h2>Add a New Post</h2>
//         <form>
//           <label htmlFor="title">Post Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             ref={this.titleInput}
//           />
//           <label htmlFor="content">Content:</label>
//           <textarea
//             id="content"
//             name="content"
//             ref={this.contentInput}
//           />
//           <button type="button" className="button" onClick={this.handleSave}>
//             Save Post
//           </button>
//         </form>
//       </section>
//     );
//   }
// };

export default AddPostForm;
