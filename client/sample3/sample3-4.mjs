const getRecord = async (targetId) => { 
    const fetchResult = await fetch( 
      `http://localhost:3000/api/sample2/${targetId}`, 
      { 
        method: "GET", 
        headers: { 
          "Content-Type": "application/json", 
        }, 
      }, 
    ) 
    const responsce = await fetchResult.json() 
    if (responsce.status !== "success") { 
      throw new Error(responsce.status) 
    } 
    return responsce.data 
  } 
   
  const updateRecord = async (id, inputBody) => { 
    const fetchResult = await fetch(`http://localhost:3000/api/sample2/${id}`, { 
      method: "PUT", 
      headers: { 
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(inputBody), 
    }) 
    const responsce = await fetchResult.json() 
    if (responsce.status !== "success") { 
      throw new Error(responsce.status) 
    } 
    alert("更新が完了しました！") 
  } 
   
  const getTargetId = () => { 
    const inputFormElement = document.getElementById("target-id-form").elements 
    const id = parseInt(inputFormElement.id.value) 
    if (!id) { 
      throw new Error("idが入力されていません") 
    } 
    return id 
}
const setFormData = (record) => { 
    const inputFormElement = document.getElementById("input-form").elements 
    inputFormElement.id.value = record.id 
    inputFormElement.postcode.value = record.postcode 
    inputFormElement.address.value = record.address 
  } 
   
  const getFormData = () => { 
    const inputFormElement = document.getElementById("input-form").elements 
    const id = parseInt(inputFormElement.id.value) 
    const postcode = inputFormElement.postcode.value 
    const address = inputFormElement.address.value 
    if (!id) { 
      throw new Error("対象が読み込まれていません") 
    } 
    return { 
      id, 
      intutBody: { 
        postcode, 
        address, 
      }, 
    } 
  } 
   
  const clearFormData = () => { 
    const inputFormElement = document.getElementById("input-form").elements 
    inputFormElement.postcode.value = "" 
    inputFormElement.address.value = "" 
  } 
   
  /** 
   * ウィンドウ読み込み時の処理 
   */ 
  window.onload = () => { 
    const oneRecordLoadButtonElement = document.getElementById( 
      "one-record-load-button", 
    ) 
    oneRecordLoadButtonElement.addEventListener( 
      "click", 
      async () => { 
        try { 
          const targetId = getTargetId() 
          const targetRecord = await getRecord(targetId) 
          setFormData(targetRecord) 
        } catch (err) { 
          alert(err) 
        } 
      }, 
      false, 
    ) 
    const updateButtonElement = document.getElementById("update-button")
    updateButtonElement.addEventListener( 
        "click", 
        async () => { 
            try { 
            const { id, intutBody } = getFormData() 
            await updateRecord(id, intutBody) 
            clearFormData() 
            } catch (err) { 
            alert(err) 
            } 
        }, 
        false, 
        ) 
} 