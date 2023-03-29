module.exports.sendMsg = async (req, res) => {
  const config = require('../config/config.json');
  let fetch = require('node-fetch')
  let reqBody = req.body
  let fields = [
    '<b>Имя</b>: ' + reqBody.name,
    '<b>Компания</b>: ' + reqBody.company,
    '<b>Кол-во человек</b>: ' + reqBody.quantity
  ]
  let msg = ''
  fields.forEach(field => {
    msg += field + '\n'
  });
  msg = encodeURI(msg)

  try {
    const response = await fetch(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, { method: 'POST' });
    if (response.status === 200) {
      res.status(200).json({ status: 'ok', message: 'Успешно отправлено!' });
    }
    if (response.status === 400) {
      res.status(400).json({ status: 'error', message: 'Произошла ошибка!' });
    }
  } catch (error) {
    console.log(error);
  }

}