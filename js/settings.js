const defaults={
  ip:"127.0.0.1",
  port:"43110"
}
const validate={
  ip:(ip) => {
    return ip.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)
  },
  port:(obj) => {
    return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
  }
}
const fields=["ip","port"]

var err=false

function showError(e) {
  err=e
  $("#err").html(e)
  $("#error").show()
}

function hideError() {
  err=false
  $("#error").hide()
}

function grab() {
  var res={}
  fields.map((f) => {
    var v=$("#"+f+"_field").val().trim()||defaults[f]
    if (v.indexOf(":")!=-1) return showError("Invalid value for field "+(f.substr(0,1).toUpperCase() + f.substr(1))+" - Please seperate the Port from the IP")
    if (!validate[f](v)) return showError("Invalid value for field "+(f.substr(0,1).toUpperCase() + f.substr(1)))
    res[f]=v
  })
  return res;
}

function setField(f,v) {
  $("#"+f+"_field").val(v)
}

const actions={
  save:() => {
    hideError()
    var r=grab()
    if (err) return;
    chrome.storage.local.set({
      "zeroHostData": r.ip+":"+r.port
    }, function () {
      window.close()
    });
  },
  clear:() => {
    fields.map((f) => {setField(f,"")})
  }
}

function load() {
  chrome.storage.local.get(function (item) {
    if (item && item.zeroHostData !== undefined) {
      var data = item.zeroHostData.split(':');
      setField("ip",data[0])
      setField("port",data[1])
    }
  });

  Object.keys(actions).map((a) => {
    $("#btn_"+a).on("click",actions[a].bind(this))
  })
}

window.addEventListener("load", load);
