export const fetchData= async(params) => {
  try{
  const response=await fetch("https://api.shrtco.de/v2/shorten?url="+params)
  const data= await response.json()
  return data
  } catch(e){
    console.log(e)
  }
}