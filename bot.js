const needle = require('needle');
const this_token = ('ТОКЕН_СТРАНИЦЫ_БОТА_ВКОНТАКТЕ');
const message = ("ТЕКСТ_РАССЫЛКИ");
const prikrep_media = ("ССЫЛКА_НА_МЕДИА_ФАЙЛ_ЕСЛИ_ТАКОВОЙ_ИМЕЕТСЯ");
const group_for_get_users = ("ССЫЛКА_НА_ГРУППУ_ДОНОРА_ПОЛУЧАТЕЛЕЙ_РАССЫЛКИ");

var str = prikrep_media;
var n = str.lastIndexOf('/');
var result_media = str.substring(n + 1);

// ПОДГОТОВКА ПОЛЬЗОВАТЕЛЯ
setInterval(function() {
  function randomInteger(min, max) {
    var rand_offset = min - 0.5 + Math.random() * (max - min + 1)
    rand_offset = Math.round(rand_offset);
var url = encodeURI("https://api.vk.com/api.php?oauth=1&method=groups.getMembers&group_id="+group_for_get_users+"&fields=online,can_write_private_message&offset="+rand_offset+"&count=1&v=5.67&access_token="+this_token);
needle.get(url, function(err, resp){
  if (!err && resp.statusCode == 200)
var re = (resp.body['response']);
var items = (re.items);
  console.log(items[0].id + ' - отправил сообщение');
  console.log(items);

// ОТПРАВКА САМОГО СООБЩЕНИЯ
var url = encodeURI("https://api.vk.com/api.php?oauth=1&method=messages.send&user_id="+items[0].id+"&message="+message+"&attachment="+result_media+"&v=5.67&access_token="+this_token);
needle.get(url, function(err, resp){
  if (!err && resp.statusCode == 200);
  console.log();
})
})
}
var roffset = ( randomInteger(500, 5000));
}, 60000); // ИНТЕРВАЛ ОТПРАВКИ СООБЩЕНИЯ (1мин) 1сек = 1000
