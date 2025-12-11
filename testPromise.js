const api = "https://jsonplaceholder.typicode.com/posts"


const check =(url)=>{
    const data= fetch(url)
    const data1= data.then(response=>response.json())
     data1.then(finadata=>{
    console.log(finadata.filter((a)=>a.id<10))
  })
  .catch(err=>{
    console.log(err)
  });
  
    
}


check(api)