$(function () {
    var INDEX = 0;
    $("#chat-submit").click(function (e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if (msg.trim() == "") {
            return false;
        }
        generate_message(msg, "self");
        var buttons = [
            {
                name: "Existing User",
                value: "existing"
            },
            {
                name: "New User",
                value: "new"
            }
        ];

        fetchChatBotResponse(msg).then((response) => {
            response.forEach(function (message) {
                generate_message(message.text, "user");
            });
        });
    });

    function generate_message(msg, type) {
        INDEX++;
        let userIcon = "../assets/images/user.jpg";
        let chatBotIcon = "../assets/images/images.png";
        let imageUrl = type == 'self' ? userIcon : chatBotIcon;
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + '">';
        str += '          <span class="msg-avatar">';
        str +=
            '            <img src= ' + imageUrl + '>';
        str += "          </span>";
        str += '          <div class="cm-msg-text">';
        str += msg;
        str += "          </div>";
        str += "        </div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX)
            .hide()
            .fadeIn(300);
        if (type == "self") {
            $("#chat-input").val("");
        }
        $(".chat-logs")
            .stop()
            .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }

    function generate_button_message(msg, buttons) {
        /* Buttons should be object array 
          [
            {
              name: 'Existing User',
              value: 'existing'
            },
            {
              name: 'New User',
              value: 'new'
            }
          ]
        */
        INDEX++;
        var btn_obj = buttons
            .map(function (button) {
                return (
                    '              <li class="button"><a href="javascript:;" class="btn btn-primary chat-btn" chat-value="' +
                    button.value +
                    '">' +
                    button.name +
                    "</a></li>"
                );
            })
            .join("");
        var str = "";
        str += "<div id='cm-msg-" + INDEX + '\' class="chat-msg user">';
        str += '          <span class="msg-avatar">';
        str +=
            '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
        str += "          </span>";
        str += '          <div class="cm-msg-text">';
        str += msg;
        str += "          </div>";
        str += '          <div class="cm-msg-button">';
        str += "            <ul>";
        str += btn_obj;
        str += "            </ul>";
        str += "          </div>";
        str += "        </div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX)
            .hide()
            .fadeIn(300);
        $(".chat-logs")
            .stop()
            .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
        $("#chat-input").attr("disabled", true);
    }

    $(document).delegate(".chat-btn", "click", function () {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, "self");
    });

    $("#chat-circle").click(function () {
        $("#chat-circle").toggle("scale");
        $(".chat-box").toggle("scale");
    });

    $(".chat-box-toggle").click(function () {
        $("#chat-circle").toggle("scale");
        $(".chat-box").toggle("scale");
    });
});

function fetchChatBotResponse(msg) {

    let data = {
        'message': msg,
    };

    let url = "http://192.168.232.78:5005/webhooks/rest/webhook";

    let headers = {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        'Access-Control-Allow-Methods': "DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    };
    return $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: JSON.stringify(data),
        headers: headers,
        async: false,
    }).done((response) => {
        return response.responseJSON;
    }).fail((response) => {
        return response.responseJSON;
    });

}