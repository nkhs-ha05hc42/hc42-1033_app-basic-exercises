const createRecord = async (inputBody) => { 
    const fetchResult = await fetch("http://localhost:3000/api/sample2", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(inputBody), 
    }) 
    const responsce = await fetchResult.json() 
    if (responsce.status !== "success") { 
      throw new Error(responsce.status) 
    } 
    alert("登録が完了しました！") 
} 
   
const getFormData = () => { 
const inputFormElement = document.getElementById("input-form").elements 
const name = inputFormElement.name.value 
const age = parseInt(inputFormElement.age.value) 
if (!name) { 
    throw new Error("名前は必須です") 
} 
if (!age) { 
    throw new Error("年齢は必須です") 
} 
return { 
    name, 
    age, 
} 
} 
   
const clearFormData = () => { 
    const inputFormElement = document.getElementById("input-form").elements 
    inputFormElement.name.value = "" 
    inputFormElement.age.value = "" 
} 

/** 
 * ウィンドウ読み込み時の処理 
 */ 
window.onload = () => { 
    const createButtonElement = document.getElementById("create-button") 
    createButtonElement.addEventListener( 
      "click", 
      async () => { 
        try { 
          const intutBody = getFormData() 
          await createRecord(intutBody) 
          clearFormData() 
        } catch (err) { 
          alert(err) 
        } 
      }, 
      false, 
    ) 
}