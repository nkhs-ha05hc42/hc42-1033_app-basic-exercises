const fetchResult = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=0590002") 
const jsonResult = await fetchResult.json()  

const viewAddress = (data) => {
  return  `${data.results[0].address1}${data.results[0].address2}${data.results[0].address3}`;
}

const a = viewAddress(jsonResult)
console.log(a)