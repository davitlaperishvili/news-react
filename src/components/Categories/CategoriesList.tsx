import Link from 'next/link'
import React, { useState } from 'react'
import { isNoSubstitutionTemplateLiteral } from 'typescript'
import classes from "./categories.module.scss"
import CategoryItem from './CategoryItem'

const categoryList: string[] = ["Business","Computer Science" , "Sport"]

export default function CategoriesList() {
  const [catList, setCatList] = useState(categoryList);
  const [isSub, setIsSub] = useState(false);

  function renderCategories(categories: string[]) {
    return categories.map((cat, index) => {
      if(isSub){
        const subCat = cat.split("/").slice(-1)[0].replace(/_/g, " ");
        return <CategoryItem 
                  key={cat + index} 
                  isSub={isSub} 
                  setIsSub={setIsSub} 
                  catName={subCat} 
                  setCatList={setCatList}
                  uri={cat} 
                />
      }
      return <CategoryItem 
                key={cat + index} 
                isSub={isSub} 
                setIsSub={setIsSub} 
                catName={cat} 
                setCatList={setCatList} 
              />
    })
  }
  function handleGoBack(): void {
    setCatList(categoryList);
    setIsSub(false)
  }
  return (
    <div className={classes.categories_list_wrap}>
      {isSub? <div className={classes.go_back} onClick={handleGoBack}>Go Back</div> : null}
      <div className={classes.categories_list}>
        <ul>
          {renderCategories(catList)}
        </ul>
      </div>
    </div>
  )
}
