const getMessageForm = () => {
  const messageForm = document.getElementById("message-form").elements
  const user_id = messageForm.message_user_id.value
  const message = messageForm.message.value

  return {
    user_id,
    message,
  }
}

const validateMessageForm = (messageForm) => {
  // ここでバリデーションチェック（入力内容のチェック）を行う
}

const clearMessageForm = () => {
  const messageFormElement = document.getElementById("message-form").elements
  messageFormElement.message_user_id.selectedIndex = 0
  messageFormElement.message.value = ""
}

const submitMessage = async (messageForm) => {
  const response = await await Promise.resolve({
    status: "success",
  })
  if (response.status !== "success") {
    throw new Error(response.status)
  }
}

const deleteMessage = async (id) => {
  const response = await Promise.resolve({
    status: "success",
  })
  if (response.status !== "success") {
    throw new Error(response.status)
  }
}

const getUsers = async () => {
  const response = await Promise.resolve({
    status: "success",
    list: [
      {
        id: 1,
        name: "テストユーザー1",
      },
      {
        id: 2,
        name: "テストユーザー2",
      },
      {
        id: 3,
        name: "テストユーザー3",
      },
    ],
  })
  if (response.status !== "success") {
    alert("Error!")
    return
  }
  return response.list
}

const getMessages = async () => {
  // ダミーデータ
  const response = await Promise.resolve({
    status: "success",
    list: [
      {
        id: 1,
        user_name: "テストデータ1",
        message: "テストメッセージ1",
        created_unixtime: new Date("2025-02-09").getTime(),
      },
      {
        id: 2,
        user_name: "テストデータ2",
        message: "テストメッセージ2",
        created_unixtime: new Date("2025-02-09").getTime(),
      },
      {
        id: 3,
        user_name: "テストデータ3",
        message: "テストメッセージ3\n改行データ",
        created_unixtime: new Date("2025-02-09").getTime(),
      },
    ],
  })
  if (response.status !== "success") {
    alert("Error!")
    return
  }
  return response.list
}

const addMessage = (
  messageDivElement,
  messageId,
  userName,
  message,
  createdUnixtime,
) => {
  const messageDiv = document.createElement("div")
  messageDiv.className = "message"
  messageDivElement.appendChild(messageDiv)

  const userNameDiv = document.createElement("div")
  userNameDiv.className = "user_name"
  userNameDiv.appendChild(document.createTextNode(userName))
  messageDiv.appendChild(userNameDiv)

  const messageTextDiv = document.createElement("div")
  messageTextDiv.className = "text"
  for (let [index, messageText] of message.split("\n").entries()) {
    if (index > 0) {
      messageTextDiv.appendChild(document.createElement("br"))
    }
    messageTextDiv.appendChild(document.createTextNode(messageText))
  }
  messageDiv.appendChild(messageTextDiv)

  const messageControlDiv = document.createElement("div")
  messageControlDiv.className = "control"
  messageDiv.appendChild(messageControlDiv)

  const createdDateDiv = document.createElement("div")
  createdDateDiv.className = "created-date"
  createdDateDiv.appendChild(
    document.createTextNode(new Date(Number(createdUnixtime)).toLocaleString()),
  )
  messageControlDiv.appendChild(createdDateDiv)

  const deleteButton = document.createElement("button")
  deleteButton.appendChild(document.createTextNode("削除"))
  deleteButton.dataset.id = messageId
  deleteButton.className = "delete-button"
  deleteButton.addEventListener("click", clickDeleteButton, false)
  messageControlDiv.appendChild(deleteButton)
}

const clickDeleteButton = async (event) => {
  const id = event.target.dataset.id

  try {
    await deleteMessage(id)
    await loadMessages()
    await sleep(500)
  } catch (err) {
    alert(err)
  }
}

const sleep = async (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, ms),
  )
}

const loadUsers = async () => {
  const users = await getUsers()
  const userSelectElement = document.getElementById("user-select")
  for (let user of users) {
    const selectOption = document.createElement("option")
    userSelectElement.appendChild(selectOption)
    selectOption.value = user.id
    selectOption.appendChild(document.createTextNode(user.name))
  }
}

const loadMessages = async () => {
  const messages = await getMessages()
  const messageDivElement = document.getElementById("messages")
  messageDivElement.innerHTML = ""

  for (const message of messages) {
    addMessage(
      messageDivElement,
      message.id,
      message.user_name,
      message.message,
      message.created_unixtime,
    )
  }
}

const clickSubmitButton = async () => {
  try {
    const messageForm = getMessageForm()
    validateMessageForm(messageForm)
    await submitMessage(messageForm)
    await loadMessages()
    await clearMessageForm()
    await sleep(500)
  } catch (err) {
    alert(err.message)
  }
}

/**
 * ウィンドウ読み込み時の処理
 */
window.onload = async () => {
  const submitButtonElement = document.getElementById("submit-button")
  submitButtonElement.addEventListener("click", clickSubmitButton, false)

  try {
    await Promise.all([loadMessages(), loadUsers()])
    await sleep(500)
  } catch (err) {
    alert(err.message)
  }
}
