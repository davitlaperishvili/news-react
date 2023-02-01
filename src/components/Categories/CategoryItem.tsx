import { API_KEY } from '@/server/vars';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import classes from "./categories.module.scss"

interface catPropType {
  catName: string; 
  setCatList: React.Dispatch<React.SetStateAction<string[]>>; 
  isSub: boolean; 
  setIsSub: React.Dispatch<React.SetStateAction<boolean>>; 
  uri?: string
}
export default function CategoryItem({catName, setCatList, isSub, setIsSub, uri}: catPropType) {

  const router = useRouter();
  async function handleClick() {
    const subCatsConfig = {
        prefix: catName,
        page: 1,
        count: 20,
        articleBodyLen: -1,
        apiKey: API_KEY
    }
    if(!isSub) {
      try{
        const response = await fetch("https://eventregistry.org/api/v1/suggestCategoriesFast", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(subCatsConfig)
        });
        const data: {
          uri: string;
          label: string;
          parentUri: string
        }[] = await response.json();
        const subCatsList = data.map( item => {
          return item.uri
        })
        console.log(subCatsList)
        setCatList(subCatsList);
        setIsSub(true)
      }catch(e) {
        console.log("Error When Fetch SubCategories ===>>> ", e)
      }
    }else{
      router.push(`category/${uri}`)
    }

  }
  return (
    <li className={classes.category_item}>
      <span onClick={handleClick}>{catName}</span>
    </li>
  )
}
