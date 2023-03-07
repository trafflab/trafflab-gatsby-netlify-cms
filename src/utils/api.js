export const sendFormToTg = (product, name, contact, comfyContact) => {
  const message = `
    Ваш продукт - ${product}, 
    Ваше имя - ${name}, 
    Контакт для связи - ${contact}, 
    Удобный канал связи - ${comfyContact}
  `

  return fetch(`https://api.telegram.org/bot5543193450:AAEAf0Z8sasjKkwn4VgSLk1CSM9IhpMgMQE/sendMessage?chat_id=-906397071&parse_mode=html&text=${message}`, {
    method: 'GET'
  })
  .then((res) => res.json())
}