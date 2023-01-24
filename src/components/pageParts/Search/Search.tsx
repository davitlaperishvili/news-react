
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import classes from "./search.module.scss"

interface targetType {
    value: string;
    name:string
}
export default function Search() {
    const [formValues, setFormValues] = useState({searchInput: ""})
    const router = useRouter()
    function handleChange({target}: any ) {
        const value = target.value;
        const name = target.name;
        const inputItem = { ...formValues, [name]: value };
        setFormValues(inputItem);
    }
    function handleSubmit(e: any) {
        e.preventDefault()
        router.push(`/search/${encodeURIComponent(formValues.searchInput)}`);
    }

  return (
    <div className={classes.page_search}>
        <div className={classes.form_wrap}>
            <form action="" onSubmit={handleSubmit}>
                <div className={classes.form_items}>
                    <div className={classes.form_item}>
                        <input type="text" placeholder="Search News" onChange={handleChange} value={formValues.searchInput} name="searchInput" />
                    </div>
                    <div className={`${classes.form_item} ${classes.form_submit}`}>
                        <button type="submit" className={classes.form_submit_button}>
                            <i className="ri-search-line"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
