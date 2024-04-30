import React, {useState} from "react"

type initialStateType = {
    name : string
    fullName: string
    age: string
}

const Form = () =>{

    const initialState = {
        form:{
        name:'',
        fullName: '',
        age: ''
        }
    }
    const [form,setValues] = useState<initialStateType>(initialState.form)
    const [display, setDisplay] = useState<boolean>(false);

    const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("hhh" ,form)
        setValues({
          ...form,
          [e.target.name]: e.target.value
        });
      };
   
  const printValues = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setDisplay(true);
  };
    return (
        <form onSubmit={printValues}>
        <div>
          <label htmlFor="userName">
            Username:
            <input
              value={form.name }
              name="name"
              onChange={updateField}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="fullName">
            FullName:
            <input
              value={form.fullName || ""}
              name="fullName"
              type="text"
              onChange={updateField}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="age">
            Age:
            <input value={form.age || ""} name="age" onChange={updateField} />
          </label>
        </div>
        <br />
        <button>Submit</button>
        {display && (
          <>
            <h4>Request Sent to DB with below request data</h4>
            <ul>
              <li>UserName: {form.name.toUpperCase()}</li>
              <li>FullName: {form.fullName.toUpperCase()}</li>
              <li>Age: {form.age}</li>
            </ul>
          </>
        )}
      </form>
    )
}

export default Form;