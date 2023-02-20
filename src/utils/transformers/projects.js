import { FIELD_NAME, PROPS_NAME } from "../constants/forms";

export const projectsResponseTransform = (data) => {
  if (data && !!Object.keys(data).length) {
    return Object.keys(data).reduce((acc,el)=>({...acc,el:{
        id:data[el][FIELD_NAME]['ID'],
        title:data[el][FIELD_NAME]['NAME'],
        slug:data[el][FIELD_NAME]['CODE'],
        logo: data[el][PROPS_NAME]["LOGO"],
        text1: data[el][PROPS_NAME]["TEXT_1"],
        text2: data[el][PROPS_NAME]["TEXT_2"],
        slider: data[el][PROPS_NAME]["SLIDER"],

    }}),{})

  }
  return {}
};
