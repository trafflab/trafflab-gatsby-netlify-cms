export const sendFormToTg = (product, name, contact, comfyContact) => {
  const message = `
    Ваш продукт - ${product}, 
    Ваше имя - ${name}, 
    Контакт для связи - ${contact}, 
    Удобный канал связи - ${comfyContact}
  `

  return fetch(`https://api.telegram.org/bot5502333932:AAFTPXDUZcEJ9c07zoJrZZDZVFZO9GUk0Eo/sendMessage?chat_id=-738135275&parse_mode=html&text=${message}`, {
    method: 'GET'
  })
  .then((res) => res.json())
}