let URLTYPE = {
    tiny: 0, //查询长链接
    long: 1, //生成短链接
};
let URLTEXT = ["请输入短链接,按回车确认", "请输入长链接，按回车确认",];
let backendUrl = "http://111.229.216.12:9001/";
let interfaces = {
    build: backendUrl + "set",
    look: backendUrl + "get",
}

//设置服务方式
let urlType = URLTYPE.tiny;
document.getElementById("urlTextId").innerHTML = URLTEXT[urlType];

function buildTiny(longUrl) {
    let result = longUrl;
    axios
        .get(interfaces.build + "?id=" + longUrl)
        .then((res) => {
            result = res.data;
            document.getElementById("outputId").innerHTML = result;
        })
        .catch((err) => {
            if (err.response) {
                document.getElementById("outputId").innerHTML = "error: " + err.response.data;
            } else {
                document.getElementById("outputId").innerHTML = "error: " + err.message;
            }
        })
}

function lookForUrl(tiny) {
    let result = tiny;
    axios
        .get(interfaces.look + "?id=" + tiny)
        .then((res) => {
            result = res.data;
            document.getElementById("outputId").innerHTML = result;
        })
        .catch((err) => {
            if (err.response) {
                document.getElementById("outputId").innerHTML = "error: " + err.response.data;
            } else {
                document.getElementById("outputId").innerHTML = "error: " + err.message;
            }
        })
}

function listenInput() {
    let keychar = null;
    if (event.which) {
        keychar = event.which;
    } else if (window.event) {
        keychar = window.event;
    }

    if (keychar === 13) {
        let inputElem = document.getElementById("inputId");
        if (urlType === URLTYPE.tiny) {
            lookForUrl(inputElem.value);
        } else {
            buildTiny(inputElem.value);
        }
    }
}

function selectUrlType(type) {
    urlType = type;
    let urlTextElem = document.getElementById("urlTextId");
    urlTextElem.innerHTML = URLTEXT[urlType];
    document.getElementById("serviceId").style.visibility = "visible"

    document.getElementById("inputId").removeEventListener("keypress", null);
    document.getElementById("inputId").addEventListener("keypress", listenInput);
}