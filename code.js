$("#submit").on('click', () => {
  var slot = $("#slot").val()
  var slot = slot.split(',')
  var item = $("#item").val()
  var item = item.split(',')
  var name = $("#name").val()
  var name = name.split(',')
  var lore = $("#lore").val()
  var lore = lore.split(',')
  var result = ""

  for (var i = 0; i < slot.length; i++) {
    result += "set slot " + slot[i] + " of {_gui} to " + item[i] + " named \"" + name[i] + "\" with lore \"" + lore[i] + "\"<br>"
  }
  $("#result").html(result)
})
