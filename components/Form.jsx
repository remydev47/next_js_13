import Link from "next/link"

const Form = ({type, post, setPost, submitting, handleSubmit, }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
       <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
       </h1>
       <p className="desc text-left max-w-md">
        {type} and Share Amaizing Prompts with the World, and let your 
        imagination run wild in  any AI-Powered Platform
       </p>

       <form
         onSubmit={handleSubmit}
         className="mt-10 w-full max-w-2xl flex flex-col grasmorphism"
       >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt 
          </span>

          <textarea 
            value={post.prompt}
            onChange={(e) => setPost({...post, value: e.target.value})}
            placeholder="Write Your AI Prompt here..."
            required
            className="form_textarea"
          />

        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
             Tag {` `}
             <span className="font-normal">(#webdevelopment,product, #idea, #AI, )</span>
          </span>

          <input 
            value={post.tag}
            onChange={(e) => setPost({...post, tag: e.target.value})}
            placeholder="#tag"
            required
            className="form_input"
          />

        </label>

       </form>
    </section>
  )
}

export default Form